import * as MyRoutes from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import {BsHouseDoor, BsCart3, BsPerson} from 'react-icons/all'
import {StyleFooter} from './style'

export function Footer (props) {

    const navigate = useNavigate()

    return(
        <StyleFooter color1={props.color1} color2={props.color2} color3={props.color3}>
            <BsHouseDoor onClick={()=>MyRoutes.goToFeedPage(navigate)}/>
            <BsCart3 onClick={()=>MyRoutes.goToCartPage(navigate)}/>
            <BsPerson onClick={()=>MyRoutes.goToProfilePage(navigate)}/>
        </StyleFooter>
    )
}