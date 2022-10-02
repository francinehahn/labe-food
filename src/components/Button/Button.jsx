import React from "react"
import { ButtonStyle } from "./style"


export function Button ( {color, buttonTitle} ) {
    return <ButtonStyle color={color}>{buttonTitle}</ButtonStyle>
}