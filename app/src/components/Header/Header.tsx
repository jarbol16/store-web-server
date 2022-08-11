import React, {FC} from "react"
import Logo from '../../assets/images/logo.png'
import SearchBar from "../SearchBar/SearchBar";

interface Props {
  setValue: Function
}

const Header: FC<Props> = ({setValue}) => {
  return (
    <div>
      <div className="banner" itemID="header">
        <div className="banner__content">
          <a data-testid="Banner-logo" className="banner__link" href="http://localhost:3000/" title="Ir a Mercado Libre">
            <img className="banner__image" src={Logo} alt="Logo" />
          </a>
          <SearchBar setValue={setValue} />
        </div>
      </div>
    </div>
  )
}

export default Header;

