const person = {
  firstName: 'Adam',
  lastname: 'Smith'
}

function greet(msg, s){
  console.log(`${msg}, ${s} ${this.firstName}`);
}

// greet('Hii')
const val = greet.bind(person, ['Hiii', 'Mr'])
val()
