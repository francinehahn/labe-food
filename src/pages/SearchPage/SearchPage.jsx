import React from "react";
import { Header } from "../../components/Header/Header";
import { SearchDiv, SearchPageStyle } from "./style"
import search from '../../images/search.png'
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/constants";
import { useForm } from "../../hooks/useForm"
import RestaurantButtonCard from "../../components/RestaurantButtonCard/RestaurantButtonCard";
import { Loading } from "../../components/Loading/Loading";
import useProtectedPage from "../../hooks/useProtectedPage";


function SearchPage() {

    useProtectedPage()

    const [dataRestaurants, errorRestaurants, isLoadingRestaurants] = useRequestData(`${BASE_URL}/restaurants`, localStorage.getItem("token"))
    const [form, onChange] = useForm({restaurant: ""})

    const filteredRestaurants = dataRestaurants && dataRestaurants.restaurants.map((restaurantSearch) => {
        if(restaurantSearch.name.toLowerCase().includes(form.restaurant.toLowerCase())){
            return <RestaurantButtonCard restaurant={restaurantSearch} key={restaurantSearch.id}/>
        }
    })   

    return (
        <SearchPageStyle>

            <Header showArrow={'true'} showTitle={'true'} title={'Busca'}/>

            <SearchDiv> 
                <img src={search}/> 
                <input type="text" name="restaurant" value={form.restaurant} onChange={onChange} placeholder="Restaurante"/> 
            </SearchDiv>            

            {isLoadingRestaurants && <Loading/>}

            {!isLoadingRestaurants && errorRestaurants && <p>{errorRestaurants}</p>}

            {!isLoadingRestaurants && dataRestaurants && form.restaurant === "" ? <p>Busque por nome de restaurante</p> : filteredRestaurants}

        </SearchPageStyle>
    )
}

export default SearchPage