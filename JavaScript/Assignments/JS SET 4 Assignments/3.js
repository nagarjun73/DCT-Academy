function joinWords(a) {
    let result = a[0]
    let initialSplice = []
    let commonWord = []
    let wordCommon = ''
  for(let i=0; i<a[0].length; i++){
      initialSplice.push(a[0].slice(i))
    }

  for(let b=0; b<a[1].length; b++){
      initialSplice.push(a[1].slice(0, a[1].length-b))
  }

  for(let j=0; j<initialSplice.length; j++){
    if(!commonWord.includes(initialSplice[j])){
      commonWord.push(initialSplice[j])
    }else{
      wordCommon += initialSplice[j]
    }
  }

  for(let d=1; d<a.length; d++){
    let nxtVal = a[d]
    result += nxtVal.slice(wordCommon.length)
  }
  return  result
}

console.log(joinWords(["aaa", "bbb", "ccc", "ddd"]));
console.log(joinWords(["to", "ops", "psy", "syllable"]));
console.log(joinWords(["move", "over", "very"]));
console.log(joinWords(["oven", "envier", "erase", "serious"]));

