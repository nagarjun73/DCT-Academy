let str = "dctjsnjjfsesfw";
let array = "";
let array2 = "";
//d, dc, dct

// for (let i = 0; i < 1; i++) {
//   array.push(str[i]);
//   for (let j = i + 1; j < 2; j++) {
//     array.push(str[i] + str[j]);
//     for (let k = j + 1; k < 3; k++) {
//       array.push(str[i] + str[j] + str[k]);
//     }
//   }
// }

for (let i = 0; i < str.length; i++) {
  array += str[i];
  array2 += array;

  if (i < str.length - 1) {
    array2 += ",";
  }
}
// array2 -= 1;
// for (let i = 1; i <= str.length; i++) {
//   array.push(str.substring(0, i));
// }

console.log(array2);
// console.log(array);
