import React, { useState } from "react"
import axios from "axios"
import { Header } from '../../components/Header/Header'
import { City } from "../../components/Inputs/City"
import { Complement } from "../../components/Inputs/Complement"
import { Neighbourhood } from "../../components/Inputs/Neighbourhood"
import { Number } from "../../components/Inputs/Number"
import { State } from "../../components/Inputs/State"
import { Street } from "../../components/Inputs/Street"
import { Form } from "./style"
import { Button } from "../../components/Button/Button"
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import {BASE_URL, validateStreet, validateNumber, validateNeighbourhood, validateCity, validateState} from "../../constants/constants";
import { goToProfilePage } from "../../routes/coordinator"


export function EditAddressPage() {
    
    const navigate = useNavigate()

    const [form, onChange] = useForm({
        street: JSON.parse(localStorage.getItem("street")),
        number: JSON.parse(localStorage.getItem("number")),
        neighbourhood: JSON.parse(localStorage.getItem("neighbourhood")),
        city: JSON.parse(localStorage.getItem("city")),
        state: JSON.parse(localStorage.getItem("state")),
        complement: JSON.parse(localStorage.getItem("complement"))
    })

    const [isStreetValid, setIsStreetValid] = useState(true)
    const [isNumberValid, setIsNumberValid] = useState(true)
    const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(true)
    const [isCityValid, setIsCityValid] = useState(true)
    const [isStateValid, setIsStateValid] = useState(true)
    const [errorText, setErrorText] = useState(undefined)

    const editAddress = () => {
        axios.put(`${BASE_URL}/address`, form, {
            headers: {
                "auth": localStorage.getItem("token")
            }
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            goToProfilePage(navigate)
        })
        .catch((error) => {
            setErrorText(error.response.data.message)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setIsStreetValid(validateStreet(form.street))
        setIsNumberValid(validateNumber(form.number))
        setIsNeighbourhoodValid(validateNeighbourhood(form.neighbourhood))
        setIsCityValid(validateCity(form.city))
        setIsStateValid(validateState(form.state))
    
        isStateValid && isNumberValid && isNeighbourhoodValid && isCityValid && isStateValid && editAddress()
    }

    return (
        <>
            <Header showArrow={'true'} showTitle={'true'} title={'Endereço'} />
            
            <Form onSubmit={onSubmit}>
                <Street name="street" value={form.street} onChange={onChange} isValid={isStreetValid} />
                <Number name="number" value={form.number} onChange={onChange} isValid={isNumberValid} />
                <Complement name="complement" value={form.complement} onChange={onChange} />
                <Neighbourhood name="neighbourhood" value={form.neighbourhood} onChange={onChange} isValid={isNeighbourhoodValid} />
                <City name="city" value={form.city} onChange={onChange} isValid={isCityValid} />
                <State name="state" value={form.state} onChange={onChange} isValid={isStateValid} />
                <p>{errorText}.</p>
                <Button type="submit" color="#5CB646" buttonTitle="Salvar" />
            </Form>
        </>
    )
}
