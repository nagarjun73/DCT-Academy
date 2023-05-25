const stringFromObject = function(obj){
    let result = []
    for(const key in obj){
      result.push(`${key} = ${obj[key]}`)
    }
    return result.join(', ')
  }
console.log(stringFromObject({a:1, b:'2'})); //returns "a = 1, b = 2"
console.log(stringFromObject({name:'Elie', job: 'Instructor', isCatOwner: false})); // returns "name = Elie, job = Instructor, isCatOwner = false"