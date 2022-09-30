import styled from "styled-components";

export const LoginPageLoading = styled.div`
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

export const LoginPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 184px;
    justify-content: center;
    align-items: center;

    img {
        width: 104px;
        height: 58px;
        margin: 68px 0 16px;
        object-fit: contain;
    }

    form > p {
        margin: 0 32px;
        letter-spacing: -0.29px;
        font-size: 12px;
        color: #e02020;
    }
`

export const TextContainer = styled.div`
    
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