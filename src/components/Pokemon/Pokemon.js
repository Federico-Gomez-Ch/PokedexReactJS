import "../Pokemon/Pokemon.css";
import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );
  const redHeart = "❤️";
  const blackHeart = "🖤";
  const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

  const clickHeart = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className="pokemonCard">
      <div className="pkmImgContainer">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pkmImg"
        />
      </div>
      <div className=" cardBody">
        <div className=" cardTop">
          <h3>{pokemon.name}</h3>
          <div># {pokemon.id}</div>
        </div>
        <div className="cardBottom">
          <div className="pkmType">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pkmTypeText">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button onClick={clickHeart} className="pkmHeartBtn">
            <div className="pokemon-favorite">{heart}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
