/*
INPUT: stringFromObject({ a: 1, b: '2' })
OUTPUT: "a = 1, b = 2"

INPUT: stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false
})
OUTPUT: "name = Elie, job = Instructor, isCatOwner = false"

*/

function stringFromObject(obj){
  let str = []
  for(const key in obj){
    str.push(key + ' = ' + obj[key])
  }
  return str.join(', ')
}

console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false}));
console.log(stringFromObject({ a: 1, b: '2' }));