function firstNElement(arr, num){
  if(!num){
    let [newArr] = arr.slice(0, 1)
  return newArr
  }else{
    return arr.slice(0, num)
  }
}

console.log(firstNElement([7,9,0,-2]));
console.log(firstNElement([7,9,0,-2], 3));
