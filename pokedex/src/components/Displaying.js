import React from "react";

const Displaying = ({ meta, isLoading }) => {
  const displayingText = meta.total ? `${meta.from} to ${meta.to} of ` : "";
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
