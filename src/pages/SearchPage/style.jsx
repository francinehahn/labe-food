import styled from "styled-components";

export const SearchPageStyle = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
        display: flex;
        align-items: center;
        background-color: white;
        height: 56px;
        width: 88vw;
        padding: 19px 48px 19px 16px;
        border-radius: 2px;
        border: 1px solid var(--greyish);
        margin: 10px 0 20px 0;
        svg {
            width: 24px;
            height: 24px;
            margin-right: 10px;
            color: var(--greyish);
        }
        input {
            border: none;
            font-size: 16px;
            color: var(--greyish);
        }
    }
`
