const counter = {
  count: 0,

  getCount: function(){
    return `The value of count is ${this.count}`
  },
    up: function(){
    this.count += 1
    return getCount()
  },
  down: function(){
    this.count -= 1
    return getCount() 
  },
  reset: function(){
    this.count = 0
    return getCount() 
  }
}

console.log(counter.up());
console.log(counter.up());
console.log(counter.down());
console.log(counter.reset());


