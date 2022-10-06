import React from "react"
import { InputStyle } from "./styled"


export function State ({ value, onChange, isValid }) {
    
    let color
    isValid===true || isValid===undefined ? color='#B8B8B8' : color='#e02020'
    
    return (
        <>
            <InputStyle color={color}>
                <label>Estado*</label>
                <input type="text" name="state" value={value} onChange={onChange} placeholder="Estado"
                    title="Digite o nome com pelo menos 2 carateres"/>
            </InputStyle>

            {isValid===false && <p>Estado em formato inválido.</p>}
        </>
    )
}