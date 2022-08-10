import React, { FC, useCallback, useState } from "react";
import IconSearch from '../../assets/icons/search_x2.png'

interface Props {
  setValue: Function
}

const SearchBar: FC<Props> = ({ setValue }) => {
  const [query, setQuery] = useState("");

  const handleChange = useCallback((text: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(text.target.value);
    console.log(text.target.value);
  },[]);

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Presioando", query);
    setValue(query);
  }

  return (
    <form className="search__bar" >
      <input
        itemID="searchInput"
        className="input"
        placeholder="Nunca dejes de buscar"
        value={query}
        name="query"
        type={"search"} onChange={handleChange} />
      <button onClick={handleSubmit}>
        <img src={IconSearch} alt="" width="16px" aria-label="buscar" />
      </button>
    </form>
  )
}

export default SearchBar;