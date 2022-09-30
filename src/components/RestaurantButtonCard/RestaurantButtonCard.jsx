import { RestaurantButtonCardStyle } from "./styled";
import { goToRestaurantPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";


const RestaurantButtonCard = ({restaurant}) => {

    const navigate = useNavigate()

    return (

        <RestaurantButtonCardStyle onClick={()=>{goToRestaurantPage(navigate, restaurant.id)}}>
            <img src={restaurant.logoUrl} alt="Logo do Restaurante"></img>
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

export default RestaurantButtonCard;