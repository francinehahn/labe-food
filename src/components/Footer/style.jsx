import styled from "styled-components";

export const StyleFooter = styled.footer `
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    background-color: white;
    border-top: solid 1px var(--greyish);
    width: 100vw;
    svg {
        width: 120px;
        height: 49px;
        padding: 11px 46px 11px 47px;
        :nth-child(1) {
            color: ${props => props.color1};
        }
        :nth-child(2) {
            color: ${props => props.color2};
        }
        :nth-child(3) {
            color: ${props => props.color3};
        }
    }
`