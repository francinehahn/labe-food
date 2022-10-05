import React from "react"
import { InputStyle } from "./styled"


export function Complement ({ value, onChange }) {      
    
    return (
        <InputStyle color={'#B8B8B8'}>
            <label>Complemento</label>
            <input type="text" name="complement" value={value} onChange={onChange} placeholder="Apto./Bloco"/>
        </InputStyle>
    )
}