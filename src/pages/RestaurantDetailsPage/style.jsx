import styled from "styled-components";

export const ContainerDetailsRestaurants = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  width: 100vw;
  margin-top: 3%;
  `;

export const ContainerImg = styled.div`
  border-radius: 10px 10px 0 0;
  width: 90vw;
  height: 150px;
  .imageProduct {
    width: 90vw;
    height: 150px;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
  }

  .imageProduct img {
    object-fit: cover;
    width: 90%;
  }
`;
export const SpanDetailsRestaurants = styled.div`
  margin: 1% 0;
  color: var(--greyish);
  font-family: Roboto;
  font-size: 16px;
`;
export const DivShipping = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DivDetailsRestaurants = styled.div`
  width: 90%;
  margin: 2% 0;

  h4 {
    color: var(--mid-green);
    font-size: 16px;
  }
  h5 {
    margin: 2% 0;
    border-bottom: 1px solid black;
    font-size: 16px;
    line-height: 30px;
  }
`;
