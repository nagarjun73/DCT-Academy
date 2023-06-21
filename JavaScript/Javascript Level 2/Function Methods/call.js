const person = {
  firstName: 'Adam',
  lastname: 'Smith'
}

function greet(msg){
  console.log(`${msg}, ${this.firstName}`);
}

// greet('Hii')
greet.call(person, 'Hiii')