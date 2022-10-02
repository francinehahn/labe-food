import React from "react"
import { InputStyle } from "./styled"


export function Street ({ value, onChange, color }) {
    return (
        <InputStyle color={color}>
            <label>Logradouro*</label>
            <input name="street" value={value} onChange={onChange} placeholder="Rua / Av." type="text"
                title="Digite o nome com pelo menos 3 carateres" />
        </InputStyle>
    )
}