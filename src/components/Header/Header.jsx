import React from "react"
import {IoIosArrowBack} from 'react-icons/all'
import { useNavigate } from "react-router-dom"
import {HeaderContainer, DontShowArrow} from './styled'

export function Header({showArrow, showTitle, title}) {
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            {showArrow==='true' && <IoIosArrowBack onClick={() => navigate(-1)}/>}
            {showArrow==='false' && <DontShowArrow> <IoIosArrowBack/> </DontShowArrow>}
            {showTitle==='true' && <p>{title}</p>}
        </HeaderContainer>
    )
}