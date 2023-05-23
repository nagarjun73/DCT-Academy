function evenOdd(arr) {
  let evn = [];
  let odd = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evn.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [evn, odd];
}

console.log(evenOdd([1, 2, 3, 4, 5, 6]));
