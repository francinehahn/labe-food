import styled from "styled-components"

export const SignupPageStyle = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
        width: 104px;
        height: 58px;
        margin: 25px 0;
    }
    form > p {
        margin: 0 32px;
        letter-spacing: -0.29px;
        font-size: 12px;
        color: var(--red);
    }
`

export const TextContainer = styled.div `
  width: 88vw;
  height: 42px;
  padding: 12px 32px;
  p {
    text-align: center;
    color: var(--black);
    text-decoration: none;
  }
`