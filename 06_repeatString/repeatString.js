const repeatString = function (string, count) {
  if (count < 0) return "ERROR";
  let word = "";
  for (let i = 0; i < count; i++) {
    word += string;
  }
  return word;
};

module.exports = repeatString;
