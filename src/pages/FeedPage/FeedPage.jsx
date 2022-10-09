import React, { useState } from "react"
import {Header} from '../../components/Header/Header'
import {ButtonSearch, FeedPageStyle, FiltersContainer, CardsContainer} from './style'
import {HiOutlineSearch} from 'react-icons/hi'
import {Loading} from '../../components/Loading/Loading'
import { goToSearchPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { Footer } from "../../components/Footer/Footer"
import {RestaurantButtonCard} from "../../components/RestaurantButtonCard/RestaurantButtonCard"
import { OrderBanner } from "../../components/OrderBanner/OrderBanner"
import {useProtectedPage} from "../../hooks/useProtectedPage"
import {useRequestData} from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"


export function FeedPage() {

    useProtectedPage()

    const [data, error, isLoading] = useRequestData(`${BASE_URL}/restaurants`, localStorage.getItem("token"))
    const [activeOrder] = useRequestData(`${BASE_URL}/active-order`, localStorage.getItem("token"))
    const [category, setCategory] = useState("")

    const navigate = useNavigate()    

    const restaurantsList = data && data.restaurants.map((restaurant) => {
        if(restaurant.category === category || category === "") {
            return <RestaurantButtonCard restaurant={restaurant} key={restaurant.id}/>            
        }
    })
    

    return (
        <FeedPageStyle>
            <Header showArrow={'false'} showTitle={'true'} title={'FutureEats'}/>

            {!isLoading && data && (
                <>
                <ButtonSearch onClick={() => goToSearchPage(navigate)}>
                    <HiOutlineSearch/>
                    <p>Restaurante</p>
                </ButtonSearch>

                <FiltersContainer>
                    <button onClick={() => setCategory("Hamburguer")}>Burger</button>
                    <button onClick={() => setCategory("Asiática")}>Asiática</button>
                    <button onClick={() => setCategory("Árabe")}>Árabe</button>
                    <button onClick={() => setCategory("Italiana")}>Italiana</button>
                    <button onClick={() => setCategory("Sorvetes")}>Sorvetes</button>
                    <button onClick={() => setCategory("Carnes")}>Carnes</button>
                    <button onClick={() => setCategory("Baiana")}>Baiana</button>
                    <button onClick={() => setCategory("Petiscos")}>Petiscos</button>
                    <button onClick={() => setCategory("Mexicana")}>Mexicana</button>               
                </FiltersContainer>

                <CardsContainer>
                    {restaurantsList}
                    {activeOrder && <OrderBanner name={activeOrder.order.restaurantName} price={activeOrder.order.totalPrice}/>}
                </CardsContainer>          

                </>
            )}
            
            {!isLoading && error && <p>{error}</p>}
            {isLoading && <Loading/>}            

            <Footer color1={'#5CB646'} color2={'#B8B8B8'} color3={'#B8B8B8'}/>                  
        </FeedPageStyle>
    )
}
