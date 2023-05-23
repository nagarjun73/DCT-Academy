const str = "DCtdcTa";

/*
{
d:["d","d"],
c:["C","c"],
t:["t","T"],
a:["a"]
}
*/

const obj = {};

let arrOfKey = [];

for (let i = 0; i < str.length; i++) {
  if (str[i] !== arrOfKey[i]) {
    if (str[i] === str[i].toLowerCase()) {
      arrOfKey.push(str[i]);
    }
  }
}

for (let i = 0; i < arrOfKey.length; i++) {
  obj[arrOfKey[i]] = [];

  for (let j = 0; j < str.length; j++) {
    if (arrOfKey[i] === str[j].toLowerCase() || str[j].toUpperCase())
      obj[arrOfKey[j]] = str[j];
  }
}

// for (let j = 0; j < str.length; j++) {
//   if (obj[j] === str[j].toLowerCase() || str[j].toUpperCase()) {
//     if (arrOfKey[j]) {
//       arrOfKey[j].push(str[j]);
//     }
//   }
// }

console.log(obj);
