import React, { useEffect, useState } from "react"
import { Email } from "../../components/Inputs/Email"
import { Password } from "../../components/Inputs/Password"
import { Button } from "../../components/Button/Button"
import logo from '../../images/logo.png'
import logoblack from '../../images/logo-black.png'
import { LoginPageLoading, LoginPageStyle, TextContainer, LoadingButtonLogin } from "./style"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { useNavigate } from "react-router-dom"
import { goToFeedPage, goToAddAddressPage } from "../../routes/coordinator"
import axios from "axios"
import { BASE_URL } from "../../constants/constants"
import { validateEmail, validatePassword } from "../../constants/constants"


export function LoginPage() {

    const navigate = useNavigate()

    const [showLogo, setShowLogo] = useState(true)
    const [loading, setLoading] = useState(false)
    const [isEmailValid, setIsEmailValid] = useState(undefined)
    const [isPasswordValid, setIsPasswordValid] = useState(undefined)
    const [error, setError] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setShowLogo(false)
        }, 1500)
    }, [])

    const [form, onChange] = useForm({
        email: "",
        password: ""
    })

    const login = () => {
        setLoading(true)

        axios.post(`${BASE_URL}/login`, form)
        .then((response) => {
            setLoading(false)
            localStorage.getItem("ProductCart")===null && localStorage.setItem("ProductCart", JSON.stringify([]))
            localStorage.setItem("token", response.data.token)
            response.data.user.hasAddress ? goToFeedPage(navigate) : goToAddAddressPage(navigate)
        })
        .catch((err) => {
            setLoading(false)
            setError(err.response.data.message)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        isEmailValid && isPasswordValid && login()
    }

    return (
        <>
        {showLogo && (
            <LoginPageLoading>
                <img src={logoblack} alt ="Logo da Future Eatscom fundo preto"/>
            </LoginPageLoading>
        )}

        {!showLogo && (
            <LoginPageStyle>
                <img src={logo} alt="Logo da Future Eats"/>
                <TextContainer>
                    <p>Entrar</p>
                </TextContainer>

                <form onSubmit={handleSubmit}>
                    <Email value={form.email} onChange={onChange} name="email" isValid={isEmailValid}/>
                    <Password value={form.password} onChange={onChange} name="password" label="Senha*" placeholder="Mínimo 6 caracteres" isValid={isPasswordValid} errorMessage="A senha deve possuir no mínimo 6 caracteres."/>
                    {error && <p>{error}</p>}
                    {loading? <Button color={'#5cb646'} buttonTitle={<LoadingButtonLogin> </LoadingButtonLogin>} /> : <Button color={'#5cb646'} buttonTitle="Entrar"/>}
                </form>

                <TextContainer>
                    <Link to="/cadastro"> <p>Não possui cadastro? Clique aqui.</p> </Link>
                </TextContainer>
            </LoginPageStyle>
        )}
        </>

    )
}
