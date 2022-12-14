import React, { useState } from "react"
import { InputPassword } from "./styled"
import {BsFillEyeSlashFill} from 'react-icons/bs'
import {IoEyeSharp} from 'react-icons/all'


export function Password ( { label, name, placeholder, errorMessage, value, onChange, isValid} ) {
    const [showPassword, setShowPassword] = useState(false)
    const clickShowPassword = () => setShowPassword(!showPassword)

    let color
    isValid===true || isValid===undefined ? color='#B8B8B8' : color='#e02020'

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
                        {showPassword ? <IoEyeSharp/> : <BsFillEyeSlashFill/>}
                    </button>
                </div>
            </InputPassword>

            {isValid===false && <p>{errorMessage}</p>}
        </>
    )
}