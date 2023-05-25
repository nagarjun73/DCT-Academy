const swapCase = function(str){
  let swapStr = ''
  for(let i=0; i<str.length; i++){
    if(str[i] === str[i].toLowerCase()){
      swapStr += str[i].toUpperCase()
    }else{
      swapStr += str[i].toLowerCase()
    }
  }
  return swapStr
}

console.log(swapCase('The Quick Brown Fox'));
console.log(swapCase('DcT AcaDemY'));
