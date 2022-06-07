import React from "react";
import { useNavigate} from "react-router-dom";

const Pokemon = ({ pokemon }) => {
let navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/pokemon/"+pokemon.id );
  };
  const { image, name, types } = pokemon;
  return (
    <div className="card" onClick={handleClick}>
      <h3 className="card-name">{name}</h3>
      <img className="card-image" src={image} alt={name} />
      <nav className="card-buttons">
        {Object.keys(types).map((key) => (
          <button className="card-button" id={types[key]} key={key}>
            <span>{types[key]}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Pokemon;
