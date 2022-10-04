import React from "react"
import { Header } from "../../components/Header/Header"
import { SearchPageStyle } from "./style"
import {HiOutlineSearch} from 'react-icons/hi'
import {useRequestData} from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/constants"
import { useForm } from "../../hooks/useForm"
import {RestaurantButtonCard} from "../../components/RestaurantButtonCard/RestaurantButtonCard"
import { Loading } from "../../components/Loading/Loading"
import {useProtectedPage} from "../../hooks/useProtectedPage"


export function SearchPage() {

    useProtectedPage()

    const [data, error, isLoading] = useRequestData(`${BASE_URL}/restaurants`, localStorage.getItem("token"))
    const [form, onChange] = useForm({restaurant: ""})

    const filteredRestaurants = data && data.restaurants.map((restaurantSearch) => {
        if(restaurantSearch.name.toLowerCase().includes(form.restaurant.toLowerCase())) {
            return <RestaurantButtonCard restaurant={restaurantSearch} key={restaurantSearch.id}/>
        }
    })   

    return (
        <>
        <Header showArrow={'true'} showTitle={'true'} title={'Busca'}/>
        
        {isLoading && <Loading/>}

        {!isLoading && error && <p>{error}</p>}

        {!isLoading && data && (
            <SearchPageStyle>
                <form> 
                    <HiOutlineSearch/>
                    <input type="text" name="restaurant" value={form.restaurant} onChange={onChange} placeholder="Restaurante"/> 
                </form>            

                {form.restaurant === "" ? <p>Busque por nome de restaurante</p> : filteredRestaurants}
            </SearchPageStyle>
        )}
        </>
    )
}