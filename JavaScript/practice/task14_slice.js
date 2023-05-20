/* 
Creating slice method 
*/

const strg = "dctacademy";
// console.log(strg.slice(0, 4));

const slice = function (str1, fi, ei) {
  let result = "";
  for (let i = fi; i < str1.length; i++) {
    if (i < ei) {
      result += str1[i];
    }
  }
  return result;
};

console.log(slice(strg, 5, 6));
