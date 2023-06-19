function strWeight(str1, str2){
  let char = 'abcdefghijklmnopqrstuvwxyz'
  let result1 = 0
  let result2 = 0
  for(let i=0; i<str1.length; i++){
    result1 += char.indexOf(str1[i])+1
  }

  for(let i=0; i<str2.length; i++){
    result2 += char.indexOf(str2[i])+1
  }

  if(result1 > result2){
    return 1
  }else if(result1 < result2){
    return 2
  }else if(result1 == result2){
    return 'equal'
  }
}

console.log(strWeight('batman', 'superman'));
console.log(strWeight('batman', 'manbat'));