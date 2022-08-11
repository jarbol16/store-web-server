import React from "react";
import Header from "../components/Header/Header";
import RouterProducs from "../Router/RouterProducts";
import { encodeString } from "../utilities/utilities";


const Main = () => {

  /**
   * funcio que captura todo las busquedas del usuario, limpia el query y redirecciona
   * @param text 
   */
  const searchText = (text: string) => {
    window.location.href = `/items?search=${encodeString(text)}`
  }

  return (
    <main>
      <Header setValue={searchText} key={'header_main'} />
      <RouterProducs />
    </main>
  )
}

export default Main;