const str2 = "ddcttct";

// output = 'dct'

let result = "";

// for (let i = 0; i < str.length; i++) {
//   if (!result.includes(str[i])) {
//     result.push(str[i]);
//   }
// }

// for (let i = 0; i < str2.length; i++) {
//   let matchFound = false;
//   for (let j = 0; j < result.length; j++) {
//     if (result[j] === str2[i]) {
//       matchFound = true;
//       break;
//     }
//   }

//   if (!matchFound) {
//     result.push(str2[i]);
//   }
// }

for (let i = 0; i < str2.length; i++) {
  let resultFound = false;
  for (let j = 0; j < result.length; j++) {
    if (result[j] === str2[i]) {
      resultFound = true;
      break;
    }
  }

  if (!resultFound) {
    result += str2[i];
  }
}

console.log(result);
