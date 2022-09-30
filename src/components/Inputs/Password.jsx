import { InputPassword, InputStyle } from "./styled"
import { useState } from "react"
import password1 from '../../images/password1.png';
import password2 from '../../images/password2.png';

export const Password = ( { label, name, placeholder, value, onChange, color, isValid, errorMessage} ) => {

    const [showPassword, setShowPassword] = useState(false)
    const clickShowPassword = () => setShowPassword(!showPassword)

    return (
        <>
        <InputPassword color={color}>
            <label>{label}</label>
            <div>
                <input 
                    name={name}
                    value={value} 
                    onChange={onChange} 
                    placeholder={placeholder}
                    type={showPassword ? "text" : "password"} 
                />
                <button onClick={clickShowPassword} type="button">
                    {showPassword ? <img src={password2} alt="Mostrar senha"/> : <img src={password1} alt="Esconder senha"/>}
                </button>
            </div>
        </InputPassword>

        {isValid ? undefined : 
            <p>{errorMessage}</p>
        }
        </>
    )
}