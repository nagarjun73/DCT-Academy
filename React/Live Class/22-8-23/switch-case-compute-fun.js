function compute(a, op, b){
  switch(op)  {
    case 'increment': {
      return a + 1
    }
    case 'decrement' : {
      return a - 1
    }
    case 'incrementBy' : {
      return a + b
    }
    case 'decrementBy' : {
      return a - b
    }
    default : {
      return 'Invalid computaion'
    }
  }
}

console.log(compute(10, 'increment'));
console.log(compute(10, 'decrement'));
console.log(compute(10, 'incrementBy', 5));
console.log(compute(10, 'decrementBy', 5));
