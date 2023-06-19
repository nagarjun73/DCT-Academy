function countDigits(num){
  let str = String(num)
  let sum = 0
  for(let i=0; i<str.length; i++){
    sum += parseInt(str[i])
  }
  return sum
}

console.log(countDigits(1947));