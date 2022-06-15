import React from "react";
import { useNavigate } from "react-router-dom";
import Types from "./Types";

const Pokemon = ({ pokemon: { id, image, name, types } }) => {
  let navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate("/pokemon/" + id)}>
      <h3>{name}</h3>
      <img className="image" src={image} alt={name} />
      <Types types={types} />
    </div>
  );
};

export default Pokemon;
