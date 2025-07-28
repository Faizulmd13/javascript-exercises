const palindromes = function (words) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
  const string = words
    .toLowerCase()
    .split("")
    .filter((item) => alphanumerical.includes(item))
    .join("");
  const reversedString = string.split("").reverse().join("");
  return string === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
