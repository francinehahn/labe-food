import styled from "styled-components"

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    p {
        margin: 5px 32px;
        font-size: 12px;
        color: var(--red);
    }
`

export const SuccessMessage = styled.p `
    font-size: 14px;
    margin: 10px 0;
    color: var(--mid-green);
    text-align: center;
`
