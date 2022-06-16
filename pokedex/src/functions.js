
const getIdWithZeros = (id) => {
  let zeros = "";
  switch (id.toString().length) {
    case 1:
      zeros += "00";
      break;
    case 2:
      zeros += "0";
      break;
    default:
  }
  return zeros + id;
};

export{getIdWithZeros};