import React from "react"
import { InputStyle } from "./styled"


export function Email ({ value, onChange, isValid }) {
    
    let color
    isValid ? color='#B8B8B8' : color='#e02020'

    return (
        <>
            <InputStyle color={color}>
                <label>E-mail*</label>
                <input type="text" name="email" value={value} onChange={onChange} placeholder="email@email.com"/>
            </InputStyle>
            
            {!isValid && <p>E-mail em formato inválido.</p>}
        </>
    )
}