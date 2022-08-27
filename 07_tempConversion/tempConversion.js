const ftoc = function(number) {
  const constante = 5/9;
  const result = (number - 32) * constante;

  return Math.round(result * 10) / 10;
};

const ctof = function(number) {
  const constante = 9/5;
  const result = (number * constante) + 32;

  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
