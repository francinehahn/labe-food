import { InputStyle } from "./styled"

export const State = ({ value, onChange, color }) => {

    return (
        <InputStyle color={color}>
            <label>Estado*</label>
            <input name="state" value={value} onChange={onChange} placeholder="Estado" type="text"
                title="Digite o nome com pelo menos 2 carateres" />
        </InputStyle>
    )
}