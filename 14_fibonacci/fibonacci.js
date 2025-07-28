const fibonacci = function (n) {
  if (n == 0) return 0;
  if (n < 0) return "OOPS";
  if (typeof n !== "number") n = parseInt(n);

  let num1 = 0;
  let num2 = 1;

  for (let i = 1; i < n; i++) {
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
  }

  return num2;
};

// Do not edit below this line
module.exports = fibonacci;
