import React, { useState } from "react";
import {Header} from '../../components/Header/Header'
import {ButtonSearch, FeedPageStyle, FiltersContainer, CardsContainer} from './style'
import search from '../../images/search.png'
import {Loading} from '../../components/Loading/Loading'
import { goToSearchPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer"
import RestaurantButtonCard from "../../components/RestaurantButtonCard/RestaurantButtonCard";
import { Order } from "../../components/Order/Order";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";

const FeedPage = () => {

    useProtectedPage()

    const [dataRestaurants, errorRestaurants, isLoadingRestaurants] = useRequestData(`${BASE_URL}/restaurants`, localStorage.getItem("token"))
    const [category, setCategory] = useState("")

    const navigate = useNavigate()    

    const restaurantsList = dataRestaurants && dataRestaurants.restaurants.map((restaurant) =>{
        if(restaurant.category === category){
        return <RestaurantButtonCard restaurant={restaurant} key={restaurant.id}/>            
        } else if(category === ""){
            return <RestaurantButtonCard restaurant={restaurant} key={restaurant.id}/>   
        }
    })
    
    return(
        <FeedPageStyle>

            <Header showArrow={'false'} showTitle={'true'} title={'FutureEats'}/>

            <ButtonSearch onClick={()=>{goToSearchPage(navigate)}}><img src={search} alt={'Ícone de um lupa'}/><p>Restaurante</p></ButtonSearch>

            <FiltersContainer>
                
                <button onClick={()=>{setCategory("Hamburguer")}}>Burger</button>
                <button onClick={()=>{setCategory("Asiática")}}>Asiática</button>
                <button onClick={()=>{setCategory("Árabe")}}>Árabe</button>
                <button onClick={()=>{setCategory("Italiana")}}>Italiana</button>
                <button onClick={()=>{setCategory("Sorvetes")}}>Sorvetes</button>
                <button onClick={()=>{setCategory("Carnes")}}>Carnes</button>
                <button onClick={()=>{setCategory("Baiana")}}>Baiana</button>
                <button onClick={()=>{setCategory("Petiscos")}}>Petiscos</button>
                <button onClick={()=>{setCategory("Mexicana")}}>Mexicana</button>               

            </FiltersContainer>   

            <CardsContainer>
                
                {isLoadingRestaurants && <Loading/>}

                {!isLoadingRestaurants&&dataRestaurants ? restaurantsList : <p>{errorRestaurants}</p>}

                {localStorage.getItem("orderInProgress")==="true" && <Order/>}
                
            </CardsContainer>               

            <Footer color1={'#5CB646'} color2={'#B8B8B8'} color3={'#B8B8B8'}/>                  

        </FeedPageStyle>
    )
}

export default FeedPage;