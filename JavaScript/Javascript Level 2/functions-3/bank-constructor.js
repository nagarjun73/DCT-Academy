function Customer(accNoinput, nameInput, balance){
  this.accNoinput = accNoinput
  this.nameInput = nameInput
  this.balance = balance

}

Customer.prototype.getCurrentBalance = function(){
  return `The balance as on ${new Date()} is INR ${this.balance}`
}

Customer.prototype.transaction = function(amt, code){
  if(code == 1){
    this.balance += amt
    return this.getCurrentBalance()
  }else{
    if(amt > this.balance){
      return `Insufficient fund`
    }else{
      this.balance -= amt
      return this.getCurrentBalance()
    }
  }
}

const c1 = new Customer('SBI123', 'Rajeev', 500)
console.log(c1);
console.log(c1.getCurrentBalance());
console.log(c1.transaction(1000, 1));

const c2 = new Customer('SBI124','Nikhil', 5666)
console.log(c2);
console.log(c2.getCurrentBalance());
console.log(c2.transaction(1000, 0));