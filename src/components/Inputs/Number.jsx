import React from "react"
import { InputStyle } from "./styled"


export function Number ({ value, onChange, isValid }) {
    
    let color
    isValid ? color='#B8B8B8' : color='#e02020'
    
    return (
        <>
            <InputStyle color={color}>
                <label>Número*</label>
                <input type="number" name="number" value={value} onChange={onChange} placeholder="Número"
                    title="Digite o nome com pelo menos 3 carateres"/>
            </InputStyle>

            {!isValid && <p>Número em formato inválido.</p>}
        </>
    )
}