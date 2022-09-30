import styled from "styled-components";

export const Container = styled.section `
    display: grid;
    grid-template-columns: 25% 75%;
    border: 1px solid var(--greyish);
    border-radius: 8px;
    width: 90vw;
    margin-bottom: 15px;
    img {
        width: 100%;
        height: 100%;
        border-radius: 8px 0 0 8px;
    }
    section {
        display: flex;
        flex-direction: column;
        gap: .5vh;
        div {
            position: relative;
            :nth-child(1) {
                display: grid;
                grid-template-columns: 80% 20%;
                p {
                    font-size: 16px;
                    :nth-child(1) {
                        color: var(--mid-green);
                        margin: 15px 0 0 15px;
                    }
                    :nth-child(2) {
                        color: var(--mid-green);
                        border: 1px solid var(--mid-green);
                        padding: 7px 12px;
                        border-radius: 0 8px 0 8px;
                        position: absolute;
                        top: -1px;
                        right: 0;
                    }
                }
            }

            :nth-child(3) {
                display: grid;
                grid-template-columns: 50% 50%;
                strong {
                    padding: 0 0 15px 15px;
                }
                button {
                    width: 90px;
                    height: 31px;
                    border-radius: 8px 0 8px 0;
                    border: solid 1px var(--red);
                    color: var(--red);
                    background-color: transparent;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
        }
        span {
            font-size: 12px;
            color: var(greyish);
            padding: 5px 15px 5px 15px;
        }
    }
`