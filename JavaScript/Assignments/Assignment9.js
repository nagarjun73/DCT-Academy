const sayAgain = function(str, num){
  let strCon = ''
  for(let i=1; i<=num; i++){
    strCon += str
  }
  return strCon
}

console.log(sayAgain("hi", 4));
console.log(sayAgain("hi", 0));
console.log(sayAgain("ok", 6));
