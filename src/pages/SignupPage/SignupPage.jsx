import React, { useEffect, useState } from "react"
import {Header} from '../../components/Header/Header'
import { Email } from "../../components/Inputs/Email"
import { Name } from "../../components/Inputs/Name"
import { CPF } from "../../components/Inputs/CPF"
import logo from '../../images/logo.png'
import { SignupPageStyle, TextContainer } from "./style"
import { Password } from "../../components/Inputs/Password"
import { Button } from "../../components/Button/Button"
import { useForm } from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL } from "../../constants/constants"
import { goToAddAddressPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { validateCPF, validateEmail, validatePassword, validateName } from "../../constants/constants"


export function SignupPage() {

    const navigate = useNavigate()

    const [form, onChange] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",
    })

    const [confirmPassword, setConfirmPassword] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [isCPFValid, setIsCPFValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true)
    const [errorText, setErrorText] = useState("")

    const signUp = () => {
        axios.post(`${BASE_URL}/signup`, form)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("ProductCart", JSON.stringify([]))
            goToAddAddressPage(navigate)
        })
        .catch((error) => {
            setErrorText(error.response.data.message)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        form.name === "" ? setIsNameValid(false) : setIsNameValid(validateName(form.name))
        form.email === "" ? setIsEmailValid(false) : setIsEmailValid(validateEmail(form.email))
        form.password === "" ? setIsPasswordValid(false) : setIsPasswordValid(validatePassword(form.password))
        form.cpf === null ? setIsCPFValid(false) : setIsCPFValid(validateCPF(form.cpf))
        
        form.password === confirmPassword? setIsConfirmPasswordValid(true) : setIsConfirmPasswordValid(false)

        if (isEmailValid && isPasswordValid && isCPFValid && isNameValid && isConfirmPasswordValid) {
            signUp()
        } else {
            return
        }   
    }
    
    return (
        <>
        <Header showArrow={'true'} showTitle={'false'} title={'Cadastro'}/>
        
        <SignupPageStyle>
            <img src={logo} alt="Future Eats"/>
            
            <TextContainer>
                <p>Cadastrar</p>
            </TextContainer>                
    
            <form onSubmit={onSubmit}>
                <Name name="name" value={form.name} onChange={onChange} isValid={isNameValid}/>
                <Email name="email" value={form.email} onChange={onChange} isValid={isEmailValid}/>
                <CPF name="cpf" value={form.cpf} onChange={onChange} isValid={isCPFValid}/>
                <Password name="password" value={form.password} onChange={onChange} label="Senha*" isValid={isPasswordValid} errorMessage="A senha deve possuir no mínimo 6 caracteres"/>
                <Password name="password-check" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} label="Confirmar*" placeholder="Confirme a senha anterior" isValid={isConfirmPasswordValid} errorMessage="Deve ser a mesma que a anterior."/>
                <p>{errorText}</p>
                <Button color={'#5cb646'} buttonTitle="Criar"/>
            </form>
        </SignupPageStyle>
        </>
    )
}
