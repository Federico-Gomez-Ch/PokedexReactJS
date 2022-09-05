import React from "react";
import "./SearchBar.css";
import searchPokemon from "./pokeApi";
const { useState } = React;

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const onChange = (event) => {
    setSearch(event.target.value);
  };
  const onClick = async (event) => {
    const data = await searchPokemon(search);
    console.log(data);
  };

  return (
    <div>
      <div>
        <input placeholder="Search Pokemon" onChange={onChange} />
      </div>
      <div>
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
