import React from "react"
import { Header } from "../../components/Header/Header"
import icon_edit from "../../images/edit.png"
import { ProfileStyle, AdressStyle, StyleHistory, ProfilePageStyle} from "./style"
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

    const [data, error, isLoading] = useRequestData(`${BASE_URL}/profile`, localStorage.getItem("token"))
    
    data && localStorage.setItem("address", JSON.stringify(data.user.address))
    data && localStorage.setItem("name", JSON.stringify(data.user.name))
    data && localStorage.setItem("email", JSON.stringify(data.user.email))
    data && localStorage.setItem("cpf", JSON.stringify(data.user.cpf))

    const [data1] = useRequestData(`${BASE_URL}/profile/address`, localStorage.getItem("token"))
    
    data1 && localStorage.setItem("street", JSON.stringify(data1.address.street))
    data1 && localStorage.setItem("number", JSON.stringify(data1.address.number))
    data1 && localStorage.setItem("neighbourhood", JSON.stringify(data1.address.neighbourhood))
    data1 && localStorage.setItem("city", JSON.stringify(data1.address.city))
    data1 && localStorage.setItem("state", JSON.stringify(data1.address.state))
    data1 && localStorage.setItem("complement", JSON.stringify(data1.address.complement))

    const Profile = data &&
        <ProfileStyle>
            <div>
                <p>{data.user.name}</p>
                <p>{data.user.email}</p>
                <p>{data.user.cpf}</p>
            </div>
            <img onClick={() => MyRoutes.goToEditNamePage(navigate)} src={icon_edit} alt="Icone de edição"/>
        </ProfileStyle>

     const Address = data &&
        <AdressStyle>
            <div>
                <p>Endereço cadastrado</p>
                <p>{data.user.address}</p>
            </div>
            <img onClick={() => MyRoutes.goToEditAddressPage(navigate)} src={icon_edit} alt="Icone de edição"/>
        </AdressStyle>
        

    return (
        <ProfilePageStyle>
            <Header showArrow={'false'} showTitle={'true'} title={"Meu perfil"} />
            <>
                {isLoading && <Loading/>}
                {!isLoading && data && Profile}
                {!isLoading && !data && <p>{error}</p>}
            </>
            <>
                {isLoading && <Loading/>}
                {!isLoading && data && Address}
                {!isLoading && error && <p>{error}</p>}
            </>
            <StyleHistory>
                <h4>Histórico de pedidos</h4>
                <OrderHistoryCard/>
            </StyleHistory>
            
            <Footer color1={'#B8B8B8'} color2={'#B8B8B8'} color3={'#5CB646'}/>  
        </ProfilePageStyle>
    )
}
