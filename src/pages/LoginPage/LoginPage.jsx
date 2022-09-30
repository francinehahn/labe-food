import React, { useEffect, useState } from "react";
import { Email } from "../../components/Inputs/Email";
import { Password } from "../../components/Inputs/Password";
import { Button } from "../../components/Button/Button";
import logo from '../../images/logo.png';
import logoblack from '../../images/logo-black.png';
import { LoginPageLoading, LoginPageStyle, TextContainer } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToAddAddressPage } from "../../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import { validateEmail, validatePassword } from "../../constants/constants";
import {Loading} from '../../components/Loading/Loading'

function LoginPage() {

    const [showLogo, setShowLogo] = useState(true)
    const [loading, setLoading] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)

    const navigate = useNavigate()

    let color
    if(isValid) {
        color = '#B8B8B8'
    } else {
        color = '#e02020'
    }

    useEffect(() => {
        setTimeout(() => {
            setShowLogo(false)
        }, 2000)
    }, [])

    const [form, onChange] = useForm({
        email: "",
        password: ""
    })

    const Login = () => {
        axios.post(`${BASE_URL}/login`, form)
        .then((response) => {
            setLoading(true)
            setIsValid(true)
            localStorage.getItem("ProductCart")===null && localStorage.setItem("ProductCart", JSON.stringify([]))
            localStorage.setItem("token", response.data.token)
            response.data.user.hasAddress ? goToFeedPage(navigate) : goToAddAddressPage(navigate)
        })
        .catch(() => {
            setLoading(true)
            setIsValid(false)
        })
        setLoading(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        isEmailValid && isPasswordValid && Login()
    }

    return (
        <>
        {showLogo && (
            <LoginPageLoading>
                <img src={logoblack} alt ="Logo da Future Eatscom fundo preto"/>
            </LoginPageLoading>
        )}

        {loading && <Loading/>}

        {!loading && (
            <LoginPageStyle>
                <img src={logo} alt="Logo da Future Eats"/>
                <TextContainer>
                    <p>Entrar</p>
                </TextContainer>

                <form onSubmit={onSubmit}>
                    <Email value={form.email} onChange={onChange} name="email" color={color} isValid={isEmailValid}/>
                    <Password value={form.password} onChange={onChange} name="password" label="Senha*" placeholder="Mínimo 6 caracteres" color="#e02020" isValid={isPasswordValid} errorMessage="A senha deve possuir no mínimo 6 caracteres."/>
                    {!isEmailValid && !isPasswordValid ? <p> E-mail e/ou senha incorretos. Tente novamente. </p> : undefined}
                    <Button color={'#5cb646'} buttonTitle="Entrar" />
                </form>

                <TextContainer>
                   <Link to="/cadastro"> <p>Não possui cadastro? Clique aqui.</p> </Link>
                </TextContainer>
            </LoginPageStyle>
        )}
        </>

    )
}

export default LoginPage;