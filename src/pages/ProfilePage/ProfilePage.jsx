import React from "react"
import { Header } from "../../components/Header/Header"
import {ImPencil} from 'react-icons/im'
import { ProfileStyle, AdressStyle, StyleHistory } from "./style"
import { OrderHistoryCard } from "../../components/OrderHistoryCard/OrderHistoryCard"
import { Footer } from "../../components/Footer/Footer"
import * as MyRoutes from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import {useRequestData} from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"
import {useProtectedPage} from "../../hooks/useProtectedPage"
import { Loading } from '../../components/Loading/Loading'


export function ProfilePage() {

    useProtectedPage()

    const navigate = useNavigate()

    const [profileData, error, isLoading] = useRequestData(`${BASE_URL}/profile`, localStorage.getItem("token"))
    
    profileData && localStorage.setItem("address", JSON.stringify(profileData.user.address))
    profileData && localStorage.setItem("name", JSON.stringify(profileData.user.name))
    profileData && localStorage.setItem("email", JSON.stringify(profileData.user.email))
    profileData && localStorage.setItem("cpf", JSON.stringify(profileData.user.cpf))

    const [addressData] = useRequestData(`${BASE_URL}/profile/address`, localStorage.getItem("token"))
    
    addressData && localStorage.setItem("street", JSON.stringify(addressData.address.street))
    addressData && localStorage.setItem("number", JSON.stringify(addressData.address.number))
    addressData && localStorage.setItem("neighbourhood", JSON.stringify(addressData.address.neighbourhood))
    addressData && localStorage.setItem("city", JSON.stringify(addressData.address.city))
    addressData && localStorage.setItem("state", JSON.stringify(addressData.address.state))
    addressData && localStorage.setItem("complement", JSON.stringify(addressData.address.complement))

    const profile = profileData &&
        <ProfileStyle>
            <div>
                <p>{profileData.user.name}</p>
                <p>{profileData.user.email}</p>
                <p>{profileData.user.cpf}</p>
            </div>
            <ImPencil onClick={() => MyRoutes.goToEditNamePage(navigate)}/>
        </ProfileStyle>

     const address = profileData &&
        <AdressStyle>
            <div>
                <p>Endereço cadastrado</p>
                <p>{profileData.user.address}</p>
            </div>
            <ImPencil onClick={() => MyRoutes.goToEditAddressPage(navigate)}/>
        </AdressStyle>
        
    return (
        <>
            <Header showArrow={'false'} showTitle={'true'} title={"Meu perfil"} />

            {isLoading && <Loading/>}
            {!isLoading && profileData && profile}
            {!isLoading && error && <p>{error}</p>}
            
            {isLoading && <Loading/>}
            {!isLoading && profileData && address}
            {!isLoading && error && <p>{error}</p>}

            <StyleHistory>
                <h4>Histórico de pedidos</h4>
                <OrderHistoryCard/>
            </StyleHistory>
            
            <Footer color1={'#B8B8B8'} color2={'#B8B8B8'} color3={'#5CB646'}/>  
        </>
    )
}
