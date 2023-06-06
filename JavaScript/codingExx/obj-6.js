/*
const colors = {
    white: 'peace',
    green: 'nature',
    blue: 'tranquality'
}

const person = {
    name: 'adamn',
    role: 'admin', 
    city: 'bangalore'
}


function obj2arr(obj){
  const result = []
  for(const key in obj){
    const arr = []
    arr.push(key, obj[key])
    result.push(arr)
  }
  return result
}

console.log(obj2arr(colors));
console.log(obj2arr(person));

*/

const colors = [['white', 'peace'], ['green', 'nature'], ['blue', 'tranquality']]

/*
{ white: 'peace', 
  green: 'nature', 
  blue: 'tranquality' 
}

*/

function arr2obj(arr){
  let obj1 = {}
  for(let i=0; i<arr.length; i++){
    obj1[arr[i][0]] = arr[i][1];
  }
  return obj1
}

console.log(arr2obj(colors));
