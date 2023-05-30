function countSheep(num){
  let count = ''
  for(let i=1; i<=num; i++){
    count += `${i} Sheep...`
  }
  return count
}

console.log(countSheep(5));