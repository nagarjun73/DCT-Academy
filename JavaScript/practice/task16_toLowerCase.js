/*
create toLowerCase Method
using charcode
input 
const str = 'dctacademy'

output
DCTACADEMY
*/

const strg = "NAGARJUN";

const toLowerCase = function (str1) {
  let result = "";
  for (let i = 0; i < str1.length; i++) {
    result += String.fromCharCode(str1.charCodeAt(i) + 32);
  }
  return result;
};

console.log(toLowerCase(strg));
