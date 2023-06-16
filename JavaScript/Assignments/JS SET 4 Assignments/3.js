function joinWords(a) {
    let result = a[0] //oven + vieraserious
    let initialSplice = [] //['oven','ven','en','n','envier', 'envie',envi','env','en','e']
    let commonWord = [] // ['oven','ven','en','n','envier','envie','envi','env','e']
    let wordCommon = '' // en

    //Slicing first word
  for(let i=0; i<a[0].length; i++){
      initialSplice.push(a[0].slice(i))
    }

    //Slicing 2nd word
  for(let b=0; b<a[1].length; b++){
      initialSplice.push(a[1].slice(0, a[1].length-b))
  }

  //Finding common word
  for(let j=0; j<initialSplice.length; j++){
    if(!commonWord.includes(initialSplice[j])){
      commonWord.push(initialSplice[j])
    }else{
      wordCommon += initialSplice[j]
    }
  }

  //Adding words based on common words
  for(let d=1; d<a.length; d++){
    let nxtVal = a[d]
    result += nxtVal.slice(wordCommon.length)
  }
  return  wordCommon
}

console.log(joinWords(["aaa", "bbb", "ccc", "ddd"]));
console.log(joinWords(["to", "ops", "psy", "syllable"]));
console.log(joinWords(["move", "over", "very"]));
console.log(joinWords(["oven", "envier", "erase", "serious"]));

