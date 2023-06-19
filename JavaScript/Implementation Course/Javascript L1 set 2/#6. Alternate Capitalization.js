function  capitalize(str){
  let strigg = ''
  let strigg2 = ''
  for(let i=0; i<str.length; i++){
    if(i%2 === 0){
      strigg += str[i].toUpperCase()
      strigg2 += str[i].toLowercase()
    }else{
      strigg += (str[i]).toLowercase()
      strigg2 += (str[i]).toUpperCase()
    }
  }

  return [strigg,strigg2]
}

console.log( capitalize("abcdef"));
console.log(capitalize('dct'));