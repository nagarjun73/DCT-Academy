
function randomElement(arr){
  let randomEl = arr[Math.floor((Math.random() * arr.length-1) + 1)]
  return randomEl
}

console.log(randomElement([10,20,30,40]));