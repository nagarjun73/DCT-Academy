const removeArrayElement = function(arr, target){
  let index = arr.indexOf(target)
  if(index === -1){
    return `${target} is not present in the array`
  }else{
    arr.splice(index, 1)
    return arr   
  }
}

console.log(removeArrayElement([2,5,9,6], 5)); 
console.log(removeArrayElement([2,5,9,6], 15)); 
console.log(removeArrayElement([2,5,9,6], 9)); 
console.log(removeArrayElement([2,5,9,6], 19)); 

