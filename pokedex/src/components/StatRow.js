import React from "react";

const StatRow = ({ stat, value }) => {
  const getStyle = (stat) => {
    const length = (stat / 255) * 100;
    return length + "%";
  };

  return (
    <tr>
      <td>
        <span>{stat.replaceAll("-", " ")}&nbsp;</span>
      </td>
      <td className="statCell">
        <div className="statBar">
          <p className="stat" style={{ width: getStyle(value) }}>
            &nbsp;{value}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default StatRow;
