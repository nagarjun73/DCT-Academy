/*
create substr method
*/

const strg = "dctacademy";

const substr = function (str1, fi, noI) {
  result = "";
  for (let i = fi; i < str1.length; i++) {
    if (i < noI + fi) {
      result += str1[i];
    }
  }
  return result;
};

console.log(substr(strg, 5, 4));
