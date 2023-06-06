const s = "is2 sentence4 This1 a3"
//Output: "This is a sentence"

var sortSentence = function(s) {
  let modArr = []
    let splitWord = s.split(' ')
    for(let i=0; i<splitWord.length; i++){
      modArr.push(splitWord[i][splitWord[i].length-1] + splitWord[i].slice(0, splitWord[i].length-1))
    }
    let sortedArr = modArr.sort()
    let finalRes = " "
    for(let i=0; i<sortedArr.length; i++){
      finalRes += sortedArr[i].slice(1, sortedArr[i].length)
      finalRes += ' '
    }

    return finalRes.trim()
};

console.log(sortSentence(s)); 