import styled from "styled-components"

export const InputStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 72px;
    padding: 0 16px 8px;

    label {
        font-size: 12px;
        width: 75px;
        margin: 3px 234px -18px 30px;
        padding-left: 4px;
        color: ${(props) => props.color};
        z-index: 2;
        background-color: white;
    }

    input {
        height: 56px;
        width: 88vw;
        margin: 8px 0;
        padding: 19px 48px 19px 16px;
        border-radius: 2px;
        border: solid 1px ${(props) => props.color};
        color: var(--black);
        background-color: white;
        ::placeholder {
            color: #d0d0d0;
        }
    }

`

export const InputPassword = styled(InputStyle) `
    div {
        display: flex;
        align-items: center;
        background-color: transparent;
    }
    button {
        background-color: transparent;
        border: none;
        margin: 0 0 0 -45px;
        width: 24px;
        height: 24px;
        svg {
            width: 24px;
            height: 24px;
            margin: 5px 0 0 8px;
            object-fit: contain;
            color: var(--greyish);
        }
    }
    
`

export const ErrorText = styled.p `
        margin: 0 32px;
        font-size: 12px;
        color: var(--red);
`