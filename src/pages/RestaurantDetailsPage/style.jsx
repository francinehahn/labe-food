import styled from "styled-components"

export const ContainerDetailsRestaurants = styled.section `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  margin-top: 15px;
  div {
    margin: 2% 0;
    h4 {
      color: var(--mid-green);
      font-size: 16px;
      margin: 10px 0;
    }
    h6 {
      font-size: 16px;
      font-weight: 400;
      color: var(--greyish);
    }
    p {
      margin: 1% 0;
      color: var(--greyish);
      font-size: 16px;
      line-height: 21px;
    }
  }
`

export const Image = styled.img `
  border-radius: 10px 10px 0 0;
  width: 88vw;
  height: 160px;
`
