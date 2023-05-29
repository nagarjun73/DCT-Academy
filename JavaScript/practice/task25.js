//Emotify sentence

function emotifySentence(str){
  let splitStr = str.split(' ')
  const emoteObj = {
    Smile:':)',
    Grin:':D',
    Sad:':(',
    Mad:':P'
  }
  return str.replace(splitStr[splitStr.length-1],emoteObj[splitStr[splitStr.length-1]])
}

console.log(emotifySentence("Make me Mad")); 