import styled from "styled-components";

export const RestaurantButtonCardStyle = styled.button`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 88vw;
    height: 220px;
    border-radius: 8px;
    border: solid 1px var(--greyish);
    text-align: start;
    white-space: nowrap;
    margin-bottom: 10px;
    img {
        width: 100%;
        height: 150px;
        border-radius: 8px 8px 0 0;
    }
    section {
        width: 86vw;
        p {
            color: var(--mid-green);
            margin: 12px 0 5px 17px;
            font-size: 16px;
        }
        div {
            display: flex;
            justify-content: space-between;
            span {
                margin: 0 10px 15px 17px;
                font-size: 16px;
                color: var(--greyish);
            }
        }
    }    
`