const first = function(arr, n = 1){
  if(n === 1){
    return arr.slice(0, n).toString()
  }else{
    return arr.slice(0, n)
  }
}

console.log(first([7, 9, 0, -2])); 
console.log(first([], 3)); 
console.log(first([7, 9, 0, -2], 3)); 
console.log(first([7, 9, 0, -2], 6)); 
