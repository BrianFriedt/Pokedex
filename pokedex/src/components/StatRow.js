import React from "react";

const StatRow = ({ stat, value }) => {
  const getStyle = (value) => {
    const length = (value / 255) * 100;
    return length + "%";
  };

  return (
    <tr>
      <td>
        <span>{stat.replaceAll("-", " ")}&nbsp;</span>
      </td>
      <td className="stat-cell">
        <div className="stat-bar">
          <p className="stat" style={{ width: getStyle(value) }}>
            &nbsp;{value}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default StatRow;
