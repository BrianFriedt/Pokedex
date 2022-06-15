import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import StatRow from "./StatRow";
import Invalid from "./Invalid";
import Types from "./Types";
import ProfileTable from "./ProfileTable";

const Detail = () => {
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { page_id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://intern-pokedex.myriadapps.com/api/v1/pokemon/" + page_id)
      .then((res) => res.json())
      .then((json) => {
        setPokemonInfo(json.data);
        setIsLoading(false);
      });
  }, []);

  if(!parseInt(page_id)){
    return(
      <Invalid/>
    )
  }
  else if (!isLoading) {
    const { id, name, image, types, height, weight, abilities, egg_groups, stats, genus, description } = pokemonInfo;
    return (
      <div className="fill-window" id={types[0]}>
        <header className="top inline-center">
          <button onClick={() => navigate(-1)} className="arrow back">
            &#10132;
          </button>
          <h1 className="page-title center">{name}</h1>
        </header>
        <div className="detail-card center">
          <div className="flex-container">
            <div className="card-title">
              <h1>{name} </h1>
              <h2 className="page-title"> &nbsp; #{id}</h2>
            </div>
            <Types types={types} />
          </div>
          <hr />
          <div className="flex-container">
            <div className="fle">
              <img className="image detail-image" src={image} alt={name} />
            </div>
            <div className="flex-item">
              <table className="stats">
                <tbody>
                  {Object.entries(stats).map((stat) => (
                    <StatRow stat={stat[0]} value={stat[1]} key={stat} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <h4>{genus}</h4>
          <p>{description}</p>
          <h4 className="profile">Profile</h4>
          <ProfileTable height={height} weight={weight} abilities={abilities} egg_groups={egg_groups} />
          <br />
        </div>
        <br />
      </div>
    );
  } else {
    return (
      <Loading/>
    );
  }
};

export default Detail;
