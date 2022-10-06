import React from "react"
import { InputStyle } from "./styled"


export function Street ({ value, onChange, isValid }) {
    
    let color
    isValid===true || isValid===undefined ? color='#B8B8B8' : color='#e02020'
    
    return (
        <>
            <InputStyle color={color}>
                <label>Logradouro*</label>
                <input type="text" name="street" value={value} onChange={onChange} placeholder="Rua / Av."
                    title="Digite o nome com pelo menos 3 carateres"/>
            </InputStyle>

            {isValid===false && <p>Rua em formato inválido.</p>}
        </>
    )
}