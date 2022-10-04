import styled from "styled-components";

export const OrderStyle = styled.div `
    background-color: var(--mid-green);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height: 118px;
    position: fixed;
    bottom: 50px;
    svg {
        width: 40px;
        height: 40px;
        margin: 0 30px;
        color: white;
    }
    div {
        p {
            font-size: 16px;
            margin: 5px 0;
            :nth-child(1) {
                    color: white;
            }
        }
    }
`