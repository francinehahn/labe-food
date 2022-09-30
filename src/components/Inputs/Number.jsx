import { InputStyle } from "./styled"

export const Number = ({ value, onChange, color }) => {

    return (
        <InputStyle color={color}>
            <label>Número*</label>
            <input name="number" value={value} onChange={onChange} placeholder="Número" type="text"
                title="Digite o nome com pelo menos 3 carateres" />
        </InputStyle>
    )
}