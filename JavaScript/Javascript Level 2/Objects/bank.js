const customers = {
  accountNumber:'123456789',
  name:'Adam',
  balance: 500,

  getCurrentBalance:function(){
    return `The balance is INR ${this.balance} as on ${new Date().toISOString().slice(0,10)}`
  },

  transaction: function(amount, code){
    if(code === 1){
      this.balance += amount
      return this.getCurrentBalance()
    }else{
      if(amount > this.balance){
        return "The balance is insufficient for the specific withdrawal."
      }else{
        this.balance -= amount
        return this.getCurrentBalance()
      }
    }
  }
}

console.log(customers.getCurrentBalance());
console.log(customers.transaction(1000, 1));
console.log(customers.transaction(250, 0));
console.log(customers.transaction(2500, 0));
