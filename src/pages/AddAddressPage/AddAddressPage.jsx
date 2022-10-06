import React, { useState } from "react"
import {Header} from '../../components/Header/Header'
import { City } from "../../components/Inputs/City"
import { Complement } from "../../components/Inputs/Complement"
import { Neighbourhood } from "../../components/Inputs/Neighbourhood"
import { Number } from "../../components/Inputs/Number"
import { State } from "../../components/Inputs/State"
import { Street } from "../../components/Inputs/Street"
import { AddressPageStyle, LoadingButtonLogin } from "./style"
import { Button } from "../../components/Button/Button"
import { useForm } from "../../hooks/useForm"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { BASE_URL, validateStreet, validateNumber, validateNeighbourhood, validateCity, validateState } from "../../constants/constants"
import { goToFeedPage } from "../../routes/coordinator"


export function AddAddressPage() {

    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const [loading, setLoading] = useState(false)
    const [isStreetValid, setIsStreetValid] = useState(undefined)
    const [isNumberValid, setIsNumberValid] = useState(undefined)
    const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(undefined)
    const [isCityValid, setIsCityValid] = useState(undefined)
    const [isStateValid, setIsStateValid] = useState(undefined)
    const [errorText, setErrorText] = useState("")

    const [form, onChange] = useForm({
        street: "", 
        number: "", 
        neighbourhood: "",
        city: "", 
        state: "",
        complement: ""
    })

    const editAddress = () => {
        setLoading(true)

        axios.put(`${BASE_URL}/address`, form, { headers: {
            "auth": token
        }})
        .then((response) => {
            setLoading(false)
            localStorage.setItem("token", response.data.token)
            goToFeedPage(navigate)
        })
        .catch((error) => {
            setLoading(false)
            setErrorText(error.response.data.message)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsStreetValid(validateStreet(form.street))
        setIsNumberValid(validateNumber(form.number))
        setIsNeighbourhoodValid(validateNeighbourhood(form.neighbourhood))
        setIsCityValid(validateCity(form.city))
        setIsStateValid(validateState(form.state))
 
        isStateValid && isNumberValid && isNeighbourhoodValid && isCityValid && isStateValid && editAddress()
    }

    return(
        <>
        <Header showArrow={'true'} showTitle={'false'}/>

        <AddressPageStyle>
            <p>Meu endereço</p>
            <form onSubmit={handleSubmit}>
                <Street name="street" value={form.street} onChange={onChange} isValid={isStreetValid}/>
                <Number name="number" value={form.number} onChange={onChange} isValid={isNumberValid}/>
                <Complement name="complement" value={form.complement} onChange={onChange}/>
                <Neighbourhood name="neighbourhood" value={form.neighbourhood} onChange={onChange} isValid={isNeighbourhoodValid}/>
                <City name="city" value={form.city} onChange={onChange} isValid={isCityValid}/>
                <State name="state" value={form.state} onChange={onChange} isValid={isStateValid}/>
                {errorText !== "" && <p>{errorText}.</p>}
                {loading? <Button color={'#5cb646'} buttonTitle={<LoadingButtonLogin> </LoadingButtonLogin>} /> : <Button color={'#5cb646'} buttonTitle="Salvar"/>}
            </form>
        </AddressPageStyle>
        </>
    )
}
