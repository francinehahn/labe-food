import styled from "styled-components"

export const ContainerProductsRestaurant = styled.section `
  display: flex;
  min-height: 120px;
  width: 88vw;
  border-radius: 8px;
  border: solid 1px var(--greyish);
  margin: 3% 0;
  img {
    width: 96px;
    min-height: 119px;
    border-radius: 8px 0px 0 8px;
  }
  section {
    position: relative;
    width: 90%;
    margin-left: 15px;
    div {
      :nth-child(1) {
        h4 {
          font-size: 16px;
          font-weight: 400;
          margin-top: 18px;
          color: var(--mid-green);
        }
        span {
          position: absolute;
          top: -1px;
          right: -2px;
          border: 1px solid var(--mid-green);
          border-radius: 0 8px 0 9px;
          color: var(--mid-green);
          padding: 8px 12px;
          font-size: 12px;
        }
      }
      :nth-child(3) {
        p {
          font-size: 16px;
          color: black;
          font-weight: 500;
          margin: 10px 0;
        }
      }
    }
    p {
      border-radius: 0px 5px 0px 5px;
      color: var(--greyish);
      font-size: 12px;
      margin-top: 10px;
    }
  }
`

export const Button = styled.button `
  position: absolute;
  bottom: -1px;
  right: -2px;
  text-align: center;
  height: 28%;
  width: 35%;
  border: 1px solid ${props => props.color};
  color: ${props => props.color};
  border-radius: 8px 0px 8px 0px;
  background: transparent;
  font-size: 12px;
`
