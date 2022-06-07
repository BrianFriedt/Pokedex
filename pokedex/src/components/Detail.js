import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  let { page_id } = useParams();

  const backButtonClicked = () => {
    window.history.back();
  };

  React.useEffect(() => {
    fetch("https://intern-pokedex.myriadapps.com/api/v1/pokemon/" + page_id)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setIsLoading(false);
      });
  }, []);

  const getStyle = (hp) => {
    const length = (hp / 250) * 93;
    return length + "%";
  };
  
  if (!isLoading) {
    const { id, name, image, types, height, weight, abilities, egg_groups, stats, genus, description } = data;
    const { hp, speed, attack, defense } = stats;
    const specialAttack = stats["special-attack"];
    const specialDefense = stats["special-defense"];
    return (
      <div className="detail-page" id={types[0]}>
        <header className="top">
          <button onClick={backButtonClicked} className="arrow back">
            &#10132;
          </button>
          <h1 className="page-title">{name}</h1>
        </header>
        <div className="detail-card">
          <div className="card-head">
            <div className="card-title">
              <h1>{name}</h1>
              <p> &nbsp; #{id}</p>
            </div>
            <div className="card-buttons">
              {Object.keys(types).map((key) => (
                <button className="card-button" id={types[key]} key={key}>
                  <span>{types[key]}</span>
                </button>
              ))}
            </div>
          </div>
          <hr />
          <div className="container">
            <div>
              <img className="card-image" src={image} alt={name} />
            </div>
            <div>
              <table className="stats">
                <tbody>
                  <tr>
                    <td>HP</td>
                    <td className="statCell">
                      <p className="statBar">
                        <span className="stat" style={{ paddingRight: getStyle(hp) }}>
                          {hp}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Attack</td>
                    <td>
                      <p className="statBar">
                        <span className="stat" style={{ paddingRight: getStyle(attack) }}>
                          {attack}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Defense </td>
                    <td>
                      <p className="statBar">
                        <span className="stat" style={{ paddingRight: getStyle(defense) }}>
                          {defense}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Speed</td>
                    <td>
                      <p className="statBar">
                        <span className="stat" style={{ paddingRight: getStyle(speed) }}>
                          {speed}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Special Attack</td>
                    <td>
                      <p className="statBar">
                        <span className="stat" style={{ paddingRight: getStyle(specialAttack) }}>
                          {specialAttack}
                        </span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>Special Defense</td>
                    <td>
                      <p className="statBar">
                        <span className="stat" style={{ paddingRight: getStyle(specialDefense) }}>
                          {specialDefense}
                        </span>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <h4>{genus}</h4>
          <p>{description}</p>
          <h4 className="profile">Profile</h4>
          <table className="profileTable">
            <colgroup>
              <col span={"1"} style={{ width: "15%" }} />
              <col span={"1"} style={{ width: "30%" }} />
              <col span={"1"} style={{ width: "20%" }} />
              <col span={"1"} style={{ width: "35%" }} />
            </colgroup>
            <tbody>
              <tr>
                <th>Height:</th>
                <td>{height} m</td>
                <th>Abiblities:</th>
                <td>
                  {Object.keys(abilities).map((key) => {
                    let comma = ",";
                    if (key == abilities.length - 1) {
                      comma = "";
                    }
                    return <span key={key}>{abilities[key] + comma} </span>;
                  })}
                </td>
              </tr>
              <tr>
                <th>Weight:</th>
                <td>{weight} kg</td>
                <th>Egg Groups:</th>
                <td>
                  {Object.keys(egg_groups).map((key) => {
                    let comma = ",";
                    if (key == egg_groups.length - 1) {
                      comma = "";
                    }
                    return <span key={key}>{egg_groups[key] + comma} </span>;
                  })}
                </td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        <br />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Detail;
