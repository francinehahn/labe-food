import { InputStyle } from "./styled"

export const Name = ({ value, onChange, color, isValid }) => {

    return (
        <InputStyle color={color}>
            <label>Nome*</label>
            <input name="name" value={value} onChange={onChange} placeholder="Nome e sobrenome" type="text" />
        </InputStyle>
    )
}