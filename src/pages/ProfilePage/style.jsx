import styled from "styled-components"


export const ProfileStyle = styled.div `
  display: flex;
  justify-content: space-between;
  div {
    p {
      width: 328px;
      height: 18px;      
      font-size: 16px;
      margin: 10px 0 0 16px;
      :nth-child(1){
        margin-top: 20px;
      }
    }
  }
  svg {
    width: 20px;
    height: 20px;
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
      font-size: 16px;
      :nth-child(1) {
        color: var(--greyish);
      }
      :nth-child(2) {
        margin: 5px 0;
      }
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
`

export const StyleHistory = styled.section `
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
    border-bottom: 1px solid var(--black);
  }
`