import React from "react"
import { InputStyle } from "./styled"


export function Neighbourhood ({ value, onChange, isValid }) {
    
    let color
    isValid===true || isValid===undefined ? color='#B8B8B8' : color='#e02020'
    
    return (
        <>
            <InputStyle color={color}>
                <label>Bairro*</label>
                <input type="text" name="neighbourhood" value={value} onChange={onChange} placeholder="Bairro"
                    title="Digite o nome com pelo menos 3 carateres"/>
            </InputStyle>

            {isValid===false && <p>Bairro em formato inválido.</p>}
        </>
    )
}