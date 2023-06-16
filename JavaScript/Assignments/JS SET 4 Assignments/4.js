function joinWords(a) {
    let result = a.reduce(function(prevValue, currentValue){
      let res = ''
    for(let i=0; i<currentValue.length; i++){
      if(!res.includes(currentValue[i])){
        res += currentValue[i]
      }
    }
    prevValue += res
    return prevValue
    }, '')

    return [result]
}

console.log(joinWords(["aaa", "bbb", "ccc", "ddd"]));
console.log(joinWords(["to", "ops", "psy", "syllable"]));
console.log(joinWords(["move", "over", "very"]));
console.log(joinWords(["oven", "envier", "erase", "serious"]));

