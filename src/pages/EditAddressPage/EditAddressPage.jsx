import React, { useState } from "react"
import axios from "axios"
import { Header } from '../../components/Header/Header'
import { City } from "../../components/Inputs/City"
import { Complement } from "../../components/Inputs/Complement"
import { Neighbourhood } from "../../components/Inputs/Neighbourhood"
import { Number } from "../../components/Inputs/Number"
import { State } from "../../components/Inputs/State"
import { Street } from "../../components/Inputs/Street"
import { Form, SuccessMessage } from "./style"
import { Button } from "../../components/Button/Button"
import { useForm } from "../../hooks/useForm"
import {BASE_URL, validateStreet, validateNumber, validateNeighbourhood, validateCity, validateState} from "../../constants/constants"


export function EditAddressPage() {

    const [saveChanges, setSaveChanges] = useState(false)
    const [isStreetValid, setIsStreetValid] = useState(undefined)
    const [isNumberValid, setIsNumberValid] = useState(undefined)
    const [isNeighbourhoodValid, setIsNeighbourhoodValid] = useState(undefined)
    const [isCityValid, setIsCityValid] = useState(undefined)
    const [isStateValid, setIsStateValid] = useState(undefined)
    const [errorText, setErrorText] = useState("")

    const [form, onChange] = useForm({
        street: JSON.parse(localStorage.getItem("street")),
        number: JSON.parse(localStorage.getItem("number")),
        neighbourhood: JSON.parse(localStorage.getItem("neighbourhood")),
        city: JSON.parse(localStorage.getItem("city")),
        state: JSON.parse(localStorage.getItem("state")),
        complement: JSON.parse(localStorage.getItem("complement"))
    })

    const editAddress = () => {
        axios.put(`${BASE_URL}/address`, form, {
            headers: {
                "auth": localStorage.getItem("token")
            }
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            setSaveChanges(true)
        })
        .catch((error) => {
            setErrorText(error.response.data.message)
            setSaveChanges(false)
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
            <Header showArrow={'true'} showTitle={'true'} title={'Endere??o'} />
            
            <Form onSubmit={onSubmit}>
                <Street name="street" value={form.street} onChange={onChange} isValid={isStreetValid} />
                <Number name="number" value={form.number} onChange={onChange} isValid={isNumberValid} />
                <Complement name="complement" value={form.complement} onChange={onChange} />
                <Neighbourhood name="neighbourhood" value={form.neighbourhood} onChange={onChange} isValid={isNeighbourhoodValid} />
                <City name="city" value={form.city} onChange={onChange} isValid={isCityValid} />
                <State name="state" value={form.state} onChange={onChange} isValid={isStateValid} />
                {errorText !== "" && <p>{errorText}.</p>}
                <Button type="submit" color="#5CB646" buttonTitle="Salvar" />
            </Form>

            {saveChanges && <SuccessMessage>Altera????es salvas com sucesso!</SuccessMessage>}
        </>
    )
}
