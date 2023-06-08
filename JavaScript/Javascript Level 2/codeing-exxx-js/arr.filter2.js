const arr = [true, false, '', NaN, null, [], 'dct', 10, 0, -1, {}, undefined]

function findrtruthy(arr){
  let truthy = arr.filter(function(ele){
    return ele
    // return Boolean(ele) == true
  })
  return truthy
}
console.log(findrtruthy(arr)); // [true, [], 'dct', 10, -1, {}]

function findFalsy(arr){
  let falsy = arr.filter(function(ele){
    return !ele
    // return Boolean(ele) !== true
  })
  return falsy
}

console.log(findFalsy(arr)); // [false, '', Nan, null, 0, undefined]