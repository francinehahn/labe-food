import { InputStyle } from "./styled"

export const Complement = ({ value, onChange, color }) => {
      
    return (
        <InputStyle color={color}>
            <label>Complemento</label>
            <input name="complement" value={value} onChange={onChange} placeholder="Apto./Bloco" type="text"
                title="Digite o nome com pelo menos 3 carateres" />
        </InputStyle>
    )
}