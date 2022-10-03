import styled from "styled-components";

export const SearchPageStyle = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        width: 88vw;
        padding: 15px 48px 15px 16px;
        border-radius: 2px;
        border: 1px solid var(--greyish);
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 16px;
        svg {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            color: var(--greyish);
        }
        input {
            border: 0;
            font-size: 16px;
            :focus{
                box-shadow: 0 0 0 0;
                outline: 0;
            }
        }
    }
`
