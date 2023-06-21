const person = {
  firstName: 'Adam',
  lastname: 'Smith'
}

function greet(msg, s){
  console.log(`${msg}, ${s} ${this.firstName}`);
}

// greet('Hii')
greet.apply(person, ['Hiii', 'Mr'])