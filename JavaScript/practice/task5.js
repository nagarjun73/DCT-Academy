const str = "dctacademy";
const count = "c";
let nums = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] == count) {
    nums += 1;
  }
}

console.log(nums);
