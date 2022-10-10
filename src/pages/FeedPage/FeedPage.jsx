import React, { useState, useEffect } from "react"
import axios from "axios"
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
    const [restaurantNameBanner, setRestaurantNameBanner] = useState(null)
    const [priceBanner, setPriceBanner] = useState(null)
    const [category, setCategory] = useState("")
    
    const navigate = useNavigate()    

    const restaurantsList = data && data.restaurants.map((restaurant) => {
        if(restaurant.category === category || category === "") {
            return <RestaurantButtonCard restaurant={restaurant} key={restaurant.id}/>            
        }
    })
    
    const getActiveOrder = () => {
        axios.get(`${BASE_URL}/active-order`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(response => {
            if (response.data.order !== null) {
                setRestaurantNameBanner(response.data.order.restaurantName)
                setPriceBanner(response.data.order.totalPrice)
            } else {
                setRestaurantNameBanner(null)
                setPriceBanner(null)
            }
        }).catch(err => alert(err))
    }

    useEffect(() => {
        getActiveOrder()
    }, [])

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
                    {(restaurantNameBanner !== null) &&
                        <OrderBanner name={restaurantNameBanner} price={priceBanner}/>
                    }
                </CardsContainer>          

                </>
            )}
            
            {!isLoading && error && <p>{error}</p>}
            {isLoading && <Loading/>}            

            <Footer color1={'#5CB646'} color2={'#B8B8B8'} color3={'#B8B8B8'}/>                  
        </FeedPageStyle>
    )
}
