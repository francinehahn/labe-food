import styled from "styled-components";

export const FeedPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20vh;
`

export const CardsContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 60px;
`

export const ButtonSearch = styled.button`
    display: flex;
    align-items: center;
    background-color: white;
    height: 56px;
    width: 88vw;
    padding: 19px 48px 19px 16px;
    border-radius: 2px;
    border: 1px solid var(--greyish);
    margin-top: 10px;
    margin-bottom: 15px;
    font-size: 16px;
    svg {
        width: 24px;
        height: 24px;
        margin-right: 10px;
        color: var(--greyish);
    }
    p {
        color: var(--greyish);
        font-size: 16px;
    }

`

export const FiltersContainer = styled.div`
    display: flex;
    align-items: center;
    width: 88vw;
    height: 42px;
    overflow: auto;    

    ::-webkit-scrollbar{
         background-color: white;
    }

    button {
        width: 87px;
        height: 18px;
        background-color: white;
        border: none;
        margin: 15px 10px 10px 33px;
        font-size: 16px;
        :active {
            color: var(--mid-green);
        }
        :hover{
            color: var(--mid-green);
        }
        :focus{
            color: var(--mid-green);
        }
    }
`


