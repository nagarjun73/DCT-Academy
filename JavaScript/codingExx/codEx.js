const str = "ddcttct";
// output = 'dct'

let result = "";

for (let i = 0; i < str.length; i++) {
  if (!result.includes(str[i])) {
    result.push(str[i]);
  }
}

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j <= result.length; j++) {
//     if (result[j] === str[i]) {
//       result += str[i];
//     }
//   }
// }

console.log(result);
