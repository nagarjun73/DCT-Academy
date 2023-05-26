// USING SLICE METHOD
const capitalize = function(str){
  const sepWords = str.split(' ') 
    let final = ""
    for(let i=0; i<sepWords.length; i++){
      final += sepWords[i][0].toUpperCase()
      final += sepWords[i].slice(1)
      final += " "
    }
  return final
}

console.log(capitalize('js string exercises'));
console.log(capitalize('dct academy bangalore'));


//Using nested Loop
/*
const capitalize = function(str){
  const sepWords = str.split(' ') 
  let capitalizedWord = []
    for(let i=0; i<sepWords.length; i++){
      let resultWord = ''
        for(let j=0; j<sepWords[i].length; j++){
          if(j === 0){
          resultWord += sepWords[i][j].toUpperCase()
          }else{
          resultWord += sepWords[i][j]
          }
        }
    capitalizedWord.push(resultWord)
  }
    return capitalizedWord.join(' ')
}

console.log(capitalize('js string exercises'));
console.log(capitalize('dct academy bangalore'));

*/
