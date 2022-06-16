import React from "react";
import { useNavigate } from "react-router-dom";
import Types from "./Types";
import { getIdWithZeros } from "../functions";

const Pokemon = ({ pokemon: { id, name, types } }) => {
  let navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate("/pokemon/" + id)}>
      <h3>{name}</h3>
      <img className="image" src={"https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + getIdWithZeros(id) + ".png"} alt={name} />
      <Types types={types} />
    </div>
  );
};

export default Pokemon;
