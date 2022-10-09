import React from "react"
import {OrderStyle} from './style'
import {AiOutlineClockCircle} from 'react-icons/ai'


export function OrderBanner({name, price}) {
    const formattedPrice = price.toFixed(2).toString().replace(".", ",")
    
    return (
        <OrderStyle>
            <AiOutlineClockCircle/>
            <div>
                <p>Pedido em andamento</p>
                <p>{name}</p>
                <strong>SUBTOTAL R${formattedPrice}</strong>
            </div>
        </OrderStyle>
    )
}