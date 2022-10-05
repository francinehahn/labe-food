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

export const LoadingButtonLogin = styled.div `
    border-radius: 50%;
    border: 3px solid black;
    border-bottom: 3px solid transparent;
    width: 25px;
    height: 25px;
    display: block;
    margin: 0 auto;
    
    @keyframes animationLoading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    animation: animationLoading 1.5s ease-out infinite;
`
