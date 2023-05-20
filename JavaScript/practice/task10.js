const str = "dctacademy";
const vowels = ["a", "e", "i", "o", "u"];
let vowelsCount = "";

// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     vowelsCount.push(str[i]);
//   }
// }

for (let i = 0; i < str.length; i++) {
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    vowelsCount += str[i].toUpperCase();
  } else {
    vowelsCount += str[i];
  }
}

console.log(vowelsCount);
