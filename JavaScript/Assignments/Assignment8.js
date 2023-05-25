const keys = function(obj){
  let keyArr = []
  for(const key in obj){
    keyArr.push(key)
  }
  return keyArr
}

console.log(keys({ a: 1, b: 2, c: 3}));
console.log(keys({ first: 'Matt', last: 'Lane'}));
console.log(keys({}));