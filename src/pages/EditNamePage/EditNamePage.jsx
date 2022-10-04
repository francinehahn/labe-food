import React, { useState } from "react"
import { Header } from '../../components/Header/Header'
import { Email } from "../../components/Inputs/Email"
import { Name } from "../../components/Inputs/Name"
import { CPF } from "../../components/Inputs/CPF"
import { EditNameStyle } from "./style"
import { Button } from "../../components/Button/Button"
import { useForm } from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL, validateCPF, validateEmail, validateName } from "../../constants/constants"
import * as MyRoutes from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import {useProtectedPage} from "../../hooks/useProtectedPage"
import {useRequestData} from "../../hooks/useRequestData"


export function EditNamePage() {
    
    useProtectedPage()   

    const navigate = useNavigate()
    const [data] = useRequestData(`${BASE_URL}/profile`)

    data && localStorage.setItem("name", JSON.stringify(data.user.name))
    data && localStorage.setItem("email", JSON.stringify(data.user.email))
    data && localStorage.setItem("cpf", JSON.stringify(data.user.cpf))

    const [form, onChange] = useForm({
        name: JSON.parse(localStorage.getItem("name")),
        email: JSON.parse(localStorage.getItem("email")),
        cpf: JSON.parse(localStorage.getItem("cpf"))
    })

    const [isValid, setIsValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isCPFValid, setIsCPFValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)
    const [errorText, setErrorText] = useState(undefined)

    let color
    if(isValid) {
        color = '#B8B8B8'
    } else {
        color = '#e02020'
    }

    const editProfile = () => {
        axios.put(`${BASE_URL}/profile`, form, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then((response) => {
            localStorage.setItem("token", response.token)
            MyRoutes.goToProfilePage(navigate)
        })
        .catch((error) => {
            setErrorText(error.response.data.message)
            setIsValid(false)
            alert(errorText)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setIsEmailValid(validateEmail(form.email))
        setIsCPFValid(validateCPF(form.cpf))
        setIsNameValid(validateName(form.name))
        isEmailValid && isCPFValid && isNameValid && editProfile()
    }

    return (
        <>
            <Header showArrow={'true'} showTitle={'true'} title={'Editar'}/>

            <EditNameStyle onSubmit={onSubmit}>
                <Name name="name" value={form.name} onChange={onChange} color={color} isValid={isNameValid} />
                <Email name="email" value={form.email} onChange={onChange} color={color} isValid={isEmailValid} />
                <CPF name="cpf" value={form.cpf} onChange={onChange} color={color} isValid={isCPFValid} />
                <Button type="submit" color="#5CB646" buttonTitle="SALVAR" />
            </EditNameStyle>
        </>
    )
}
