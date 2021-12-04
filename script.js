var text = "RIMAC";

var sortAlphabets = function (text) {
  return text.split("").sort().join("");
};

var stringText = sortAlphabets(text);
console.log(stringText);
