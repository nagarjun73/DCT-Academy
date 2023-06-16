function vowelOccurence(str){
  let result = {a:0, e:0, i:0, o:0, u:0}
  for(let i=0; i<str.length; i++){
    if(result.hasOwnProperty(str[i])){
      result[str[i]] += 1
    }
  }
  return result
}

console.log(vowelOccurence('javascript'));