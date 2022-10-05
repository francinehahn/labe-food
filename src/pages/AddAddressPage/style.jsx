import styled from "styled-components"

export const AddressPageStyle = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    p {
      font-size: 16px;
      margin: 0 10px;
      color: var(--black);
    }
    form {
      p {
        font-size: 12px;
        margin: 10px 0 10px 20px;
        color: var(--red);
      }
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
