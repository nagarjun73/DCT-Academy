/*
input
const str = "my name is Nagarjun i am from banglore"

output
const obj = {
  my:2;
  name:4;
  is:2;
  Nagarjun:8;
}
*/

const str =
  "my name is Nagarjun i am from banglore hii hello how are you doing baba";
let obj = {};
const spl = str.split(" ");

for (let i = 0; i < spl.length; i++) {
  obj[spl[i]] = spl[i].length;
}

console.log(obj);
