import styled from "styled-components"

export const LoginPageLoading = styled.section `
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    img {
        width: 126px;
        height: 65px;
        object-fit: contain;
    }
`

export const LoginPageStyle = styled.section `
    display: flex;
    flex-direction: column;
    padding: 0 0 184px;
    justify-content: center;
    align-items: center;
    img {
        width: 104px;
        height: 58px;
        margin: 68px 0 16px;
    }
    form > p {
        margin: 0 32px;
        letter-spacing: -0.29px;
        font-size: 12px;
        color: var(--red);
    }
`

export const TextContainer = styled.div `
    width: 360px;
    height: 42px;
    padding: 12px 32px;
    p, a {
        width: 296px;
        height: 18px;
        text-align: center;
        color: var(--black);
        text-decoration: none;
    }
`

export const LoadingButtonLogin = styled.div `
    border-radius: 50%;
    background-color: transparent;
    border: 3px solid white;
    //border-bottom: 3px solid transparent;
    width: 25px;
    height: 25px;
    
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
