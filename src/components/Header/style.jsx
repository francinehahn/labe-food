import styled from "styled-components";


export const HeaderContainer = styled.header `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 56px;
    width: 100vw;
    background-color: #fff;
    border-bottom: 1px solid lightgray;
    svg {
        margin: 8px 128px 0 16px;
        width: 23px;
        height: 24px;
    }
    p {
        font-weight: 500;
        margin-top: 6px;
    }
`

export const DontShowArrow = styled.div `
    svg {
        opacity: 0;
    }
`