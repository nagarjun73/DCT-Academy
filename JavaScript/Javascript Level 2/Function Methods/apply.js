const person = {
  firstName: 'Adam',
  lastname: 'Smith'
}

function greet(msg, s){
  console.log(`${msg}, ${s} ${this.firstName}`);
}

// greet('Hii')
greet.apply(person, ['Hiii', 'Mr'])


//finding min value of an array using es5 feature using apply

const str = [10,20,30,40,5]

//es6
console.log(Math.min(...str));

//es5
console.log(Math.min.apply({}, str)); 