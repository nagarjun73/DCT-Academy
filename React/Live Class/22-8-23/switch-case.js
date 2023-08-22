function calculator(a, b, op){
  switch (op){
    case 'add': {
      return a + b
    }
    case 'sub':{
      return a - b
    }
    case 'mul' : {
      return a * b
    }

    case 'div' : {
      return a / b
    }

    default:{
      return 'invalid operation'
    }
  }
}

console.log(calculator(2, 2, 'add'));
console.log(calculator(2, 2, 'sub'));
console.log(calculator(2, 2, 'mul'));
console.log(calculator(2, 2, 'div'));
console.log(calculator(2, 2, 'boom'));


