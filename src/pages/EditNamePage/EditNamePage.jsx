import React, { useState } from "react"
import { Header } from '../../components/Header/Header'
import { Email } from "../../components/Inputs/Email"
import { Name } from "../../components/Inputs/Name"
import { CPF } from "../../components/Inputs/CPF"
import { EditNameStyle, SuccessMessage } from "./style"
import { Button } from "../../components/Button/Button"
import { useForm } from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL, validateCPF, validateEmail, validateName } from "../../constants/constants"
import {useProtectedPage} from "../../hooks/useProtectedPage"


export function EditNamePage() {
    
    useProtectedPage()   

    const [saveChanges, setSaveChanges] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isCPFValid, setIsCPFValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)
    const [errorText, setErrorText] = useState("")

    const [form, onChange] = useForm({
        name: JSON.parse(localStorage.getItem("name")),
        email: JSON.parse(localStorage.getItem("email")),
        cpf: JSON.parse(localStorage.getItem("cpf"))
    })

    const editProfile = () => {
        axios.put(`${BASE_URL}/profile`, form, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then(setSaveChanges(true))
        .catch((error) => {
            setSaveChanges(false)
            setErrorText(error.response.data.message)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setIsEmailValid(validateEmail(form.email))
        setIsCPFValid(validateCPF(form.cpf))
        setIsNameValid(validateName(form.name))
        
        if (isEmailValid && isCPFValid && isNameValid) {
            editProfile()
        } else {
            return
        }
    }

    return (
        <>
            <Header showArrow={'true'} showTitle={'true'} title={'Editar'}/>

            <EditNameStyle onSubmit={onSubmit}>
                <Name name="name" value={form.name} onChange={onChange} isValid={isNameValid} />
                <Email name="email" value={form.email} onChange={onChange} isValid={isEmailValid} />
                <CPF name="cpf" value={form.cpf} onChange={onChange} isValid={isCPFValid} />
                {errorText !== "" && <p>{errorText}.</p>}
                <Button type="submit" color="#5CB646" buttonTitle="SALVAR" />
            </EditNameStyle>

            {saveChanges && <SuccessMessage>Alterações salvas com sucesso!</SuccessMessage>}
        </>
    )
}
