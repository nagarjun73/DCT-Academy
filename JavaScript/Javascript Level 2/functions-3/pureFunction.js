//Pure function

const fruits = ['mango', 'apple']

// converting impure to pure function
function addFruit1(fruits, name){
  const myFruits = [].concat(fruits) //fruits.slice(0) // [...fruits]
  myFruits.push(name)
  return myFruits
}

//impure function
// function addFruit1(fruits, name){
//   const myFruits = fruits
//   myFruits.push(name)
//   return myFruits
// }

console.log('before function', fruits);
console.log(addFruit1(fruits, 'kiwi'));
console.log(addFruit1(fruits, 'kiwi'));
