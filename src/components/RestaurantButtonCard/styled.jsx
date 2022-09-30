import styled from "styled-components";

export const RestaurantButtonCardStyle = styled.button`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 88vw;
    height: 200px;
    border-radius: 8px;
    border: solid 1px var(--greyish);
    text-align: start;
    white-space: nowrap;
    margin-bottom: 10px;
    img {
        width: 100%;
        height: 135px;
        border-radius: 8px 8px 0 0;
    }
    section {
        display: flex;
        flex-direction: column;
        p {
            color: var(--mid-green);
            margin-top: 12px;
            margin-bottom: 5px;
            margin-left: 17px;
            font-size: 16px;
        }
        div {
            display: flex;
            justify-content: space-between;
            color: var(--greyish);
            span {
                margin-left: 17px;
                margin-right: 10px;
                margin-bottom: 15px;
                font-size: 16px;
                :nth-child(2){
                    margin-left: 155px;
                }
            }
        }
    }    
`