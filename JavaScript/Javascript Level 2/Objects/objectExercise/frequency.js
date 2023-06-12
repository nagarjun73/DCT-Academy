function frequency(str){
  let result = str.split('').reduce(function(prevValue, currValue){
    if(prevValue.hasOwnProperty(currValue)){
      prevValue[currValue] += 1
    }else{
      prevValue[currValue] = 1
    }

    return prevValue
  }, {})
  return result
}

console.log(frequency('dctdcd'));