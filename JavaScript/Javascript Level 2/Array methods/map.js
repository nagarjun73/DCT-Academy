const numbers = [10, 15, 20, 25, 30]

// let newNumb = numbers.map(function(ele){
//   return ele+ 2
// })

// console.log(newNumb);

// let newNums = numbers.map(function(ele){
//   if(ele % 2 === 0 ){
//     return ele + 2
//   }else{
//     return ele + 3
//   }
// })

// console.log(newNums);

const fruits = ['apple', 'mango', 'kiwi']

let newObj = fruits.map(function(ele){
  return {[ele]:ele.length}
})

console.log(newObj);

