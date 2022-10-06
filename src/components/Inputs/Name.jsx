import { InputStyle } from "./styled"

export function Name ({ value, onChange, isValid }) {

    let color
    isValid===true || isValid===undefined ? color='#B8B8B8' : color='#e02020'

    return (
        <>
            <InputStyle color={color}>
                <label>Nome*</label>
                <input type="text" name="name" value={value} onChange={onChange} placeholder="Nome e sobrenome"/>
            </InputStyle>

            {isValid===false && <p>Nome em formato inválido.</p>}
        </>
    )
}