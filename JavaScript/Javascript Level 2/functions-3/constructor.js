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
