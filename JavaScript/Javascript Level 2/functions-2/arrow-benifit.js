/*
const person = {
  name: 'aman',
  profession: 'developer',
  skills: ['js', 'react', 'node'],
  details: function(){
    // this.skills.forEach(function(ele){
    // console.log(this.name + ' knows ' + ele)
    // })

    // fix1
    // const that = this
    // this.skills.forEach((ele) => {
    // console.log(this.name + ' knows ' + ele)
    // })

    // inside an arrow function, this keyword does'nt have a value of it's own, but it refers to the vale of this from it's imm=ediate outer scope.
    this.skills.forEach((ele) => {
    console.log(this.name + ' knows ' + ele)
    })
  }
}

*/

// let arr = [10, 20, 30, 40]
// for(var i=0; i<arr.length; i++){
//   console.log(`${i} in`);
// }
// console.log(`${i} out`);

// function f1() {
//   function f2(){
//     var v = 50
//     console.log(v);
//   }
//   f2()
//   console.log(v);
// }
// f1()
// console.log(v);



// function f1() {
//   let v
//   if(true){
//     v = 50
//     console.log(v);
//   }
//   console.log(v);
// }
// f1()
// console.log();


const modulea = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = modulea.getX();
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // Expected output: 42
