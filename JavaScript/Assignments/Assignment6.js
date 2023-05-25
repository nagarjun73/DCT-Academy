const evenOdd = function(arr){
  let odd = []
  let even = []
  for(let i=0; i<arr.length; i++){
    
    if(arr[i]%2 === 0){
      odd.push(arr[i])
    }else{
      even.push(arr[i])
    }
  }
  return finArr = [odd , even]
}

console.log(evenOdd([1,2,3,4,5,6]));
console.log(evenOdd([]));
