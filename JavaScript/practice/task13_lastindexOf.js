/* create lastIndexOf method
d c t a c a d e m y
0 1 2 3 4 5 6 7 8 9

output
lastIndexOf(c)  => 1
*/

const strg = "dctacademy";

const lastIndexOf = function (str1, str2) {
  for (let i = str1.length - 1; i < str1.length; i--) {
    if (str1[i] == str2) {
      return i;
    }
  }
};

console.log(lastIndexOf(strg, "a"));
