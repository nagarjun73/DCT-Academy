/*

function User(fName, lName){
  this.firstName = fName
  this.lastName = lName
  this.isAdmin = false
  this.fullName = function(){
    return `${this.firstName} ${this.lastName}`
  }

  this.details = function(){
    return `${this.firstName} - admin (${this.isAdmin})`
  }
}

const user1 = new User('Adam', 'Sayed')
// console.log(user1);
console.log(user1.details());

const user2 = new User('Gopal', 'Patgar')
// console.log(user2);
console.log(user2.details());

*/

//Constructor create objecs with the same set of properties & methods
function Product(id, name, price, rating){
  this.id = id
  this.name = name
  this.price = price
  this.rating = rating

  this.details = function(){
    return `${this.name} costs INR ${this.price} and has a ${'*'.repeat(this.rating)} rating`
  }
}

const p1 = new Product(1, 'marker', 500, 4.3)
console.log(p1);
console.log(p1.details());
const p2 = new Product(1, 'bark', 600, 3.3)
console.log(p2);
console.log(p2.details());
