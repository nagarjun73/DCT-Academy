const arr = ['virat', 'virat', 'sachin', 'virat', 'sachin', 'dhoni']


const  result = arr.reduce(function(prevValue, currentValue){
  if(prevValue.hasOwnProperty(currentValue)){
    prevValue[currentValue] ++
  }else{
    prevValue[currentValue] = 1
  }
  return prevValue
}, {})

console.log(result);


const arr2 = ['+', '-', '+', '+', '-']

// function plusMinus(arr2){
//   const result = arr2.reduce(function(prevValue, currentValue){
//     if(currentValue == '+'){
//       prevValue.plus++
//     }else{
//       prevValue.minus++
//     }
//     return prevValue
//   }, {plus: 0, minus:0})

//   return result
// }


function plusMinus(arr2){
  let result = {plus: 0, minus:0}
  arr2.forEach(function(ele){
    if(ele == '+'){
      result.plus++
    }else{
      result.minus++
    }
  })
  return result
}

console.log(plusMinus(arr2));
