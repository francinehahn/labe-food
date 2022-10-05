import React from "react"
import { InputStyle } from "./styled"


export function CPF ({ value, onChange, isValid }) {
    
    let color
    isValid ? color='#B8B8B8' : color='#e02020'
    
    return (
        <>
            <InputStyle color={color}>
                <label>CPF*</label>
                <input type="number" name="cpf" value={value} onChange={onChange} placeholder="Não adicionar ponto e hífen"/>
            </InputStyle>

            {!isValid && <p>CPF em formato inválido.</p>}
        </>
    )
}