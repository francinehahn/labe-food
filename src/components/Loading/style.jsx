import styled from "styled-components";

export const LoadingSection = styled.div `
    border-radius: 50%;
    background-color: transparent;
    border: 6px solid var(--mid-green);
    border-bottom: 6px solid transparent;
    width: 50px;
    height: 50px;
    display: block;
    margin: 45vh auto;
    
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