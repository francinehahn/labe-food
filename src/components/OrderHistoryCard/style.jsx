import styled from "styled-components";

export const StyleCardHistory = styled.div`
    width: 88vw;
    height: 102px;
    margin: 7px 0 0;
    padding: 16px;
    border-radius: 8px;
    border: solid 1px var(--greyish);

    p:nth-child(1){
        width: 80vw;
        height: 18px;
        font-size: 16px;
        letter-spacing: -0.39px;
        color: var(--mid-green);
    }

    p:nth-child(2) {
        width: 80vw;
        height: 18px;
        font-size: 12px;
        letter-spacing: -0.29px;
        color: var(--black);
    }
    p:nth-child(3) {
        width: 80vw;
        height: 18px;
        margin: 7px 0;
        font-size: 16px;
        font-weight: bold;
        letter-spacing: -0.39px;
        color: var(--black);
    }
`