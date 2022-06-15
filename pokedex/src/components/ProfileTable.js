import React from "react";

const ProfileTable = ({ height, weight, abilities, egg_groups }) => {
  return (
    <div className="flex-container">
      <div className="flex-item">
        <div className="pad">
          <strong>Height: </strong>&nbsp;{height}
        </div>
        <div className="pad">
          <strong>Weight:  </strong>&nbsp;{weight}
        </div>
      </div>
      <div className="flex-item">
        <div className="pad">
        <strong>Abilities: </strong>
            <span>&nbsp;{abilities.join(", ")}</span>
        </div>
        <div className="pad">
        <strong>Egg Groups: </strong>
            <span>&nbsp;{egg_groups.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};
export default ProfileTable;
