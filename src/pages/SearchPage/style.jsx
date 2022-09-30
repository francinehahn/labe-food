import styled from "styled-components";

export const SearchPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    height: 56px;
    width: 328px;
    padding: 19px 48px 19px 16px;
    border-radius: 2px;
    border: solid 1px var(--greyish);
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;

    img{
        width: 24px;
        height: 24px;
        margin-right: 10px;
    }

    input{
        border: 0;
        font-size: 16px;
        height: 51px;
        width: 400px;
        :focus{
            box-shadow: 0 0 0 0;
            outline: 0;
        }
    }
`

