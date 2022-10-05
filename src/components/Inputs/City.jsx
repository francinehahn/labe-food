import React from "react"
import { InputStyle } from "./styled"


export function City ({ value, onChange, isValid }) {
    
    let color
    isValid ? color='#B8B8B8' : color='#e02020'
    
    return (
        <>
            <InputStyle color={color}>
                <label>Cidade*</label>
                <input type="text" name="city" value={value} onChange={onChange} placeholder="Cidade"
                    title="Digite o nome com pelo menos 3 carateres"/>
            </InputStyle>

            {!isValid && <p>Cidade em formato inválido.</p>}
        </>
    )
}