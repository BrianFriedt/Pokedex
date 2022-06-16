import React from "react";

const Displaying = ({ meta, isLoading }) => {
  let displayingText = "";
  if (meta.total !== 0) {
    displayingText = `${meta.from} to ${meta.to} of `;
  }
  if (isLoading) {
    return <></>;
  } else {
    return (
      <div>
        <h1 className="center page-title">
          Displaying {displayingText}
          {meta.total} Pokémon
        </h1>
      </div>
    );
  }
};

export default Displaying;
