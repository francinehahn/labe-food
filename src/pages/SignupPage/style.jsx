import styled from "styled-components";

export const SignupPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 12px;
    align-items: center;
    justify-content: center;

    img {
        width: 104px;
        height: 58px;
        margin: 14px 0 16px;
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

  p {
    width: 296px;
    height: 18px;
    text-align: center;
    color: var(--black);
    text-decoration: none;
  }
`