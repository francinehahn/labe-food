import React from "react"
import { InputStyle } from "./styled"


export function CPF ({ value, onChange, color, isValid }) {
    return (
        <InputStyle color={color}>
            <label>CPF*</label>
            <input name="cpf" value={value} onChange={onChange} placeholder="000.000.000-00" type="text" />
        </InputStyle>
    )
}