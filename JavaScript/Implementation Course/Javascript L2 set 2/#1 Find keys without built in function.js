const obj = { d: 1, c: 2, t: 3 }
// INPUT: keys(obj)
// OUTPUT: ['d', 'c', 't']

function keys(obj){
  let result = []
  for(const key in obj){
    result.push(key)
  }
  return result
}

console.log(keys(obj));