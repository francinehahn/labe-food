import styled from "styled-components"

export const LoadingSection = styled.div `
    border-radius: 50%;
    background-color: transparent;
    border: 5px solid var(--mid-green);
    border-bottom: 5px solid transparent;
    width: 40px;
    height: 40px;
    display: block;
    margin: 40vh auto;
    
    @keyframes animationLoading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    animation: animationLoading .8s ease-out infinite;
`