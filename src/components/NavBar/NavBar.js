import React from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import "./NavBar.css";

const { useContext } = React;

const NavBar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let PokeApiLogo =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav className="NavBar">
      <div />
      <div>
        <img alt="LogoPokeApi" src={PokeApiLogo} className="PokeApiLogo" />
      </div>
      <div> &#10084;&#65039;{favoritePokemons.length} </div>
    </nav>
  );
};

export default NavBar;
