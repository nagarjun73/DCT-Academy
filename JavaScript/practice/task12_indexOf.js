/* create indexOf method
d c t a c a d e m y
0 1 2 3 4 5 6 7 8 9

output
indexOf(c)  => 1
*/

const strg = "dctacademy";

const indexOf = function (str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == str2) {
      return i;
    }
  }
};

console.log(indexOf(strg, "a"));
