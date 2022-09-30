import styled from "styled-components"

export const ContainerProductsRestaurant = styled.section`
  display: flex;
  height: 113px;
  border-radius: 8px;
  border: solid 1px var(--greyish);
  margin: 3% 0;
  img {
    width: 96px;
    height: 112px;
    border-radius: 8px 0px 0 8px;
    overflow: hidden;
  }
  section {
    position: relative;
    width: 90%;
    display: inline;
    flex-direction: column;
    margin-left: 2%;
    h4 {
      margin-top: 4%;
    }
    div {
      position: relative;
      bottom: 0%;
      color: var(--black); 
    }
    p {
      position: absolute;
      text-align: center;
      margin-left: 85%;
      padding-top: 2px;
      height: 25%;
      width: 15%;
      border: 0.3px solid;
      border-radius: 0px 5px 0px 5px;
      color: var(--mid-green);
      background: transparent;
    }
    span {
      margin-top: 3%;
      margin-bottom: 2%;
      width: 100%;
      height: 30px;
      font-size: 12px;
      letter-spacing: -0.29px;
      color: var(--greyish);
      font-size: 12px;
    }
  }
`

export const ButtonAdd = styled.button`
  position: absolute;
  bottom: 0;
  text-align: center;
  margin-left: 65%;
  height: 28%;
  width: 35%;
  border: 1px solid var(--mid-green);
  color: var(--mid-green);
  border-radius: 5px 0px 8px 0px;
  background: transparent;
  font-size: 12px;
`

export const ButtonRemove = styled.button`
  position: absolute;
  bottom: 0;
  text-align: center;
  margin-left: 65%;
  height: 28%;
  width: 35%;
  border: 1px solid var(--red);
  color: var(--red);
  border-radius: 5px 0px 8px 0px;
  background: transparent;
  font-size: 12px;
`
