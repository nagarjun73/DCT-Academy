function stringChop(str, num){
  let strArr = []
  for(let i=0; i<str.length; i += num){
    strArr.push(str.slice(i,num+i))
  }
  return strArr
}

console.log(stringChop('resource', 3));