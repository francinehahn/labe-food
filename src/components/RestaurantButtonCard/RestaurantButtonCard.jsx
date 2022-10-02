import { RestaurantButtonCardStyle } from "./style"
import { goToRestaurantPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"


export function RestaurantButtonCard({restaurant}) {

    const navigate = useNavigate()

    return (

        <RestaurantButtonCardStyle onClick={()=>{goToRestaurantPage(navigate, restaurant.id)}}>
            <img src={restaurant.logoUrl} alt="Logo do Restaurante"/>
                <section>
                    <p>{restaurant.name}</p>
                    <div>
                        <span>{restaurant.deliveryTime} min</span>
                        <span>Frete R${restaurant.shipping},00</span>
                    </div>
                </section>
        </RestaurantButtonCardStyle>
    )
}
