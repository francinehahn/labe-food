import styled from "styled-components"

export const ProfilePageStyle = styled.section `
    display: flex;
    flex-direction: column;
`

export const ProfileStyle = styled.div `
  display: flex;
  justify-content: space-between;
  div {
    p {
      width: 328px;
      height: 18px;      
      font-size: 16px;
      margin-top: 10px;
      margin-left: 16px;
      :nth-child(1){
        margin-top: 20px;
      }
    }
  }
  img {
    width: 24px;
    height: 24px;
    margin-top: 20px;
    margin-right: 16px;
  }
`

export const AdressStyle = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  min-height: 76px;
  margin: 16px 0;
  padding: 16px;
  background-color: #eee;
  div {
    p {
      width: 328px;
      height: 18px;
      font-size: 16px;
      :nth-child(1) {
        margin: 0 0 5px;
        color: var(--greyish);
      }
      :nth-child(2) {
        margin: 5px 0 5px 0;
      }
    }
  }
  img {
    width: 24px;
    height: 24px;
  }
`

export const StyleHistory = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vh;
  margin-bottom: 60px;
  h4 {
    font-size: 16px;
    width: 88vw;
    padding-bottom: 12px;
    letter-spacing: -0.39px;
    border-bottom: 1px solid var(--black);
  }
`