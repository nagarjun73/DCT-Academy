function repeatString(str, num){
  let strRe = ''
  if(num && str){
    for(let i=1; i<=num; i++){
    strRe += str
  }
  }else{
    return `error in string or count`
  }
  
  return strRe
}


console.log(repeatString('a', 4));
console.log(repeatString('a'));
