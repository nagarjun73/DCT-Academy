//Method forEach()

const arr = [10, 15, 20, 25]
/*
function forEachMethod(arr, callback){
  for(let i=0; i<arr.length; i++){
    callback(arr[i])
  }
}

forEachMethod(arr, function(n){
  console.log(n);
})
*/

//Method filter()
function filterMethod(arr, callback){
  let res = []
  for(let i=0; i<arr.length; i++){
    if(callback(arr[i])){
      res.push(arr[i])
    }
  }
  return res
}

console.log(filterMethod(arr, function(n){
  return n % 2 === 0
}))


