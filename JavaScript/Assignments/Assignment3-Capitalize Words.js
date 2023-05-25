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




// code2
// const capitalize = function(str){
//   const sepWords = str.split(' ') 
//   let capitalizedWord = []
//   for(let i=0; i<sepWords.length; i++){
//     capitalizedWord.push(sepWords[i][i].toUpperCase()) 
//   }
//     return capitalizedWord
// }