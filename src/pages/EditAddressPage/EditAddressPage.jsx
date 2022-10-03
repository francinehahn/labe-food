import React, { useState } from "react"
import { Header } from '../../components/Header/Header'
import { City } from "../../components/Inputs/City"
import { Complement } from "../../components/Inputs/Complement"
import { Neighbourhood } from "../../components/Inputs/Neighbourhood"
import { Number } from "../../components/Inputs/Number"
import { State } from "../../components/Inputs/State"
import { Street } from "../../components/Inputs/Street"
import { AddressPageStyle } from "./style"
import { Button } from "../../components/Button/Button"
import { useForm } from "../../hooks/useForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {BASE_URL, validateStreet, validateNumber, validateComplement, validateNeighbourhood, validateCity, validateState} from "../../constants/constants";
import { goToProfilePage } from "../../routes/coordinator"


export function EditAddressPage() {
    
    const navigate = useNavigate()

    const [form, onChange] = useForm({
        street: JSON.parse(localStorage.getItem("street")),
        number: JSON.parse(localStorage.getItem("number")),
        neighbourhood: JSON.parse(localStorage.getItem("neighbourhood")),
        city: JSON.parse(localStorage.getItem("city")),
        state: JSON.parse(localStorage.getItem("state")),
        complement: JSON.parse(localStorage.getItem("complement")),
    })

    const [isValid, setIsValid] = useState(true)
    const [isStreetValid, setIsStreetValid] = useState(true)
    const [isNumberValid, setIsNumberValid] = useState(true)
    const [isComplementValid, setIsComplementValid] = useState(true)
    const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true)
    const [isCityValid, setIsCityValid] = useState(true)
    const [isStateValid, setIsStateValid] = useState(true)
    const [errorText, setErrorText] = useState(undefined)

    let color
    if(isValid) {
        color = '#B8B8B8'
    } else {
        color = '#e02020'
    }

    const EditAddress = () => {
        axios.put(`${BASE_URL}/address`, form, {
            headers: {
                "auth": localStorage.getItem("token")
            }
        })
        .then((response) => {
            setIsValid(true)
            localStorage.setItem("token", response.data.token)
            goToProfilePage(navigate)
        })
        .catch((error) => {
            setErrorText(error.response.data.message)
            setIsValid(false)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsStreetValid(validateStreet(form.street))
        setIsNumberValid(validateNumber(form.number))
        setIsNeighbourhoodValid(validateNeighbourhood(form.neighbourhood))
        setIsCityValid(validateCity(form.city))
        setIsStateValid(validateState(form.state))
        setIsComplementValid(validateComplement(form.complement))
        isStateValid && isNumberValid && isComplementValid && isNeighbourhoodValid && isCityValid && isStateValid && EditAddress()
    }

    return (
        <>
            <Header showArrow={'true'} showTitle={'true'} title={'Endereço'} />
            <AddressPageStyle>
                <form onSubmit={onSubmit}>
                    <Street name="street" value={form.street} onChange={onChange} color={color} isValid={isStreetValid} />
                    <Number name="number" value={form.number} onChange={onChange} color={color} isValid={isNumberValid} />
                    <Complement name="complement" value={form.complement} onChange={onChange} color={color} isValid={isComplementValid} />
                    <Neighbourhood name="neighbourhood" value={form.neighbourhood} onChange={onChange} color={color} isValid={isNeighbourhoodValid} />
                    <City name="city" value={form.city} onChange={onChange} color={color} isValid={isCityValid} />
                    <State name="state" value={form.state} onChange={onChange} color={color} isValid={isStateValid} />
                    <Button type="submit" color="#5CB646" buttonTitle="Salvar" />
                </form>
            </AddressPageStyle>
        </>
    )
}
