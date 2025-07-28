const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, items) => total + items, 0);
};

const multiply = function (array) {
  return array.reduce((total, items) => total * items, 1);
};

const power = function (base, power) {
  return Math.pow(base, power);
};

const factorial = function (n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
