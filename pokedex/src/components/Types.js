import React from "react";

const Types = ({ types }) => {
  return (
    <div className="types">
      {types.map((type, index) => (
        <p className="type" id={type} key={`${type}-${index}`}>
          <span>{type}</span>
        </p>
      ))}
    </div>
  );
};

export default Types;
