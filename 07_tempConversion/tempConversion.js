const ftoc = function(a) {
  return parseFloat((((a - 32) * 5) / 9).toFixed(1));
};

const ctof = function(b) {
  return parseFloat((b * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
