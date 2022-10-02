import styled from "styled-components"

export const StyleCardHistory = styled.div `
    width: 88vw;
    height: 102px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid var(--greyish);
    p {
        letter-spacing: -0.39px;
        padding: 3px 0;
        :nth-child(1){
        font-size: 16px;
        color: var(--mid-green);
        }
        :nth-child(2) {
            font-size: 12px;
            color: var(--black);
        }
        :nth-child(3) {
            font-size: 16px;
            font-weight: bold;
            color: var(--black);
        }
    }
`