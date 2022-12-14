import React, { FC } from "react"
import Logo from '../../assets/images/logo.png'
import SearchBar from "../SearchBar/SearchBar";

interface Props {
  setValue: Function
}

const Header: FC<Props> = ({ setValue }) => {
  return (
    <nav className="banner" data-testid="header">
      <div className="banner__content">
        <a data-testid="Banner-logo" className="banner__link" href="http://localhost:3000/" title="Ir a Mercado Libre">
          <img className="banner__image" src={Logo} alt="Logo de Mercado Libre" />
        </a>
        <SearchBar setValue={setValue} />
      </div>
    </nav>
  )
}

export default Header;

