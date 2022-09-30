import React from "react"
import Router from "../src/routes/Router"
import GlobalState from "../src/global/GlobalState"
import { GlobalStyle } from "./global/GlobalStyle"


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
