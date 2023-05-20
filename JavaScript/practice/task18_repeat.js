/*
creating repeat method 
*/

const strg = "DCTAcademy";

const repeat = function (str1, num) {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str1;
  }
  return result;
};

console.log(repeat(strg, 5));
