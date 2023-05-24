const arr = [10, 20, "dct", "academy", 30, "banglore"];

const numbers = [],
  strings = [];

for (let i = 0; i < arr.length; i++) {
  // if (!Number.isNaN(parseInt(arr[i]))) {
  if (parseInt(arr[i]) !== NaN) {
    numbers.push(arr[i]);
  } else {
    strings.push(arr[i]);
  }
}

console.log(numbers.concat(strings));
