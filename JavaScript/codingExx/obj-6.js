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
    arr.push([key, obj[key]])
    result.push(arr)
  }

  return result
}

console.log(obj2arr(colors));
console.log(obj2arr(person));
