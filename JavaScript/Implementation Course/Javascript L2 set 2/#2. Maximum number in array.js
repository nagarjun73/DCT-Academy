function max(arr){
  let result = 0
  for(let i=0; i<arr.length; i++){
    if(result < arr[i]){
      result = arr[i]
    }
  }
  return result
}

console.log(max([12,34,56,1]));