import { InputStyle } from "./styled"

export const Neighbourhood = ({ value, onChange, color }) => {

    return (
        <InputStyle color={color}>
            <label>Bairro*</label>
            <input name="neighbourhood" value={value} onChange={onChange} placeholder="Bairro" type="text"
                title="Digite o nome com pelo menos 3 carateres" />
        </InputStyle>
    )
}