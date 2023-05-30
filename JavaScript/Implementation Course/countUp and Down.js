function countUpThenDown(num){
  let arr = []
  let count = 0
  for(let i=0; i<num * 2 + 2; i++){
    if(i < num){
      arr.push(count++)
    } else if(i > num){
      arr.push(count--)
    }
  }
  return arr
}
console.log(countUpThenDown(5)); 