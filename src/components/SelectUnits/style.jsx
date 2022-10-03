import styled from "styled-components"

export const Container = styled.section `
  width: 100vw;
  height: 100vh;
  position: absolute; 
  top: 0; 
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    width: 88vw;
    left: 0;
    bottom: 0;
    z-index: 20000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4vh;
    background-color: white;
    padding: 5vh 5vw;
    p {
      color: black;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 3vh;
      width: 95%;
      select {
        height: 4vh;
        border-radius: 4px;
      }
    }
    button {
      border: none;
      background-color: transparent;
      color: var(--mid-green);
      margin-left: 33vw;
    }
  }
 
`
