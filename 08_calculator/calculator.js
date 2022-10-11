const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function([a, b, c, d, e]) {
	let suma = 0;
  let array = [a, b, c, d, e];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      suma += 0;
    } else {
      suma += array[i];
    }
  }
  return suma;
};

const multiply = function([a, s, d, f, g, h, j]) {
  let suma = 1;
  let array = [a, s, d, f, g, h, j];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      suma += 0;
    } else {
      suma *= array[i];
    }
  }
  return suma;
};

const power = function(a, b) {
  let final = a;
	for (let i = 1; i < b; i++) {
    final = final * a;
  }
  return final;
};

const factorial = function(a) {
	let suma = 1;
  for (i = 1; i <= a; i++) {
    suma = suma * i;
  }
  if (suma === 0) {
    suma = 1;
  }
  return suma;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
