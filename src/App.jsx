import React from "react"
import {Router} from "../src/routes/Router"
import {GlobalState} from "../src/context/GlobalState"
import { GlobalStyle } from "./globalStyle/GlobalStyle"


function App() {

  return (
    <>
      <GlobalState>
        <GlobalStyle/>
        <Router/>
      </GlobalState>
    </>
  )
}

export default App
