const ftoc = function(fah) {
  let cel = (fah-32)/1.8;
  if(!Number.isInteger(cel)){
    return Number(cel.toFixed(1));
  }
  return cel;
};

const ctof = function(cel) {
  let fah = (1.8 * cel) + 32;
  if(!Number.isInteger(fah)){
    return Number(fah.toFixed(1));
  }
  return fah;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
