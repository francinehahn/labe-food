import { InputStyle } from "./styled"

export const Email = ({ value, onChange, color, isValid }) => {

    return (
        <>
            <InputStyle color={color}>
                <label>E-mail*</label>
                <input name="email" value={value} onChange={onChange} placeholder="email@email.com" type="e-mail" />
            </InputStyle>

            {isValid ? undefined :
                <p>E-mail em formato inválido.</p>
            }
        </>
    )
}