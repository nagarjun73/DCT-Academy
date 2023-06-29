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
/*
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
*/


//class exe
/*
const message = (firstName) => {
  console.log('hi there ' + firstName);
}

const firstName = 'adam'
function greet(firstName, cb){
  cb(firstName.toUpperCase())
}

greet(firstName, message)

*/

/*
Array.prototype.first = function(){
  return this[0]
}

Array.prototype.last = function(){
  return this[this.length - 1]
}

const fruits = ['apple', 'mango', 'orange', 'kiwi']
console.log(fruits.first());
console.log(fruits.last());

*/

//ForEach Method
// Array.prototype.dctForEach = function(callback){
//   for(let i=0; i<this.length; i++){
//     callback(this[i], i, this)
//   }
// }

// arr.dctForEach(function(a){
//   console.log(a);
// })

//Filter
Array.prototype.dctFilter = function(callback){
  let fil = []
  for(let i=0; i<this.length; i++){
    if(Boolean(callback(this[i], i, this))){
      fil.push(this[i])
    }
  }
  return fil
}
let fil1 = arr.dctFilter(function(ele){
  return ele % 2 == 0
})

console.log(fil1);


//Map
/*
Array.prototype.dctMap = function(callback){
  let map = []
  for(let i=0; i<this.length; i++){
    if(callback(this[i], i, this)){
      map.push(this[i])
    }
  }
  return map
}
let map1 = arr.dctMap(function(ele){
  return ele 
})

console.log(map1);
*/