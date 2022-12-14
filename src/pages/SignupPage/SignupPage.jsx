import React, { useEffect, useState } from "react"
import {Header} from '../../components/Header/Header'
import { Email } from "../../components/Inputs/Email"
import { Name } from "../../components/Inputs/Name"
import { CPF } from "../../components/Inputs/CPF"
import logo from '../../images/logo.png'
import { SignupPageStyle, TextContainer, LoadingButtonLogin } from "./style"
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

    const [loading, setLoading] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isEmailValid, setIsEmailValid] = useState(undefined)
    const [isPasswordValid, setIsPasswordValid] = useState(undefined)
    const [isCPFValid, setIsCPFValid] = useState(undefined)
    const [isNameValid, setIsNameValid] = useState(true)
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(undefined)
    const [errorText, setErrorText] = useState("")
    
    const [form, onChange] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: ""
    })

    const signUp = () => {
        setLoading(true)

        axios.post(`${BASE_URL}/signup`, form)
        .then((response) => {
            setLoading(false)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("ProductCart", JSON.stringify([]))
            goToAddAddressPage(navigate)
        })
        .catch((error) => {
            setLoading(false)
            setErrorText(error.response.data.message)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsNameValid(validateName(form.name))
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        setIsCPFValid(validateCPF(form.cpf))

        form.password === confirmPassword? setIsConfirmPasswordValid(true) : setIsConfirmPasswordValid(false)

        isEmailValid && isPasswordValid && isCPFValid && isNameValid && isConfirmPasswordValid && signUp() 
    }
    
    return (
        <>
        <Header showArrow={'true'} showTitle={'false'} title={'Cadastro'}/>
        
        <SignupPageStyle>
            <img src={logo} alt="Future Eats"/>
            
            <TextContainer>
                <p>Cadastrar</p>
            </TextContainer>                
    
            <form onSubmit={handleSubmit}>
                <Name name="name" value={form.name} onChange={onChange} isValid={isNameValid}/>
                <Email name="email" value={form.email} onChange={onChange} isValid={isEmailValid}/>
                <CPF name="cpf" value={form.cpf} onChange={onChange} isValid={isCPFValid}/>
                <Password name="password" value={form.password} onChange={onChange} label="Senha*" isValid={isPasswordValid} errorMessage="A senha deve possuir no m??nimo 6 caracteres"/>
                <Password name="password-check" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} label="Confirmar*" placeholder="Confirme a senha anterior" isValid={isConfirmPasswordValid} errorMessage="Deve ser a mesma que a anterior."/>
                {errorText !== "" && <p>{errorText}</p>}
                {loading? <Button color={'#5cb646'} buttonTitle={<LoadingButtonLogin> </LoadingButtonLogin>} /> : <Button color={'#5cb646'} buttonTitle="Criar"/>}
            </form>
        </SignupPageStyle>
        </>
    )
}
