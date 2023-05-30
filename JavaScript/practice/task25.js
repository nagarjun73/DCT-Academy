//Emotify sentence
function emotifySentence(str){
  let splitStr = str.split(' ')
  let lastVal = splitStr[splitStr.length-1]
  const emoteObj = {
    Smile:':)',
    Grin:':D',
    Sad:':(',
    Mad:':P'
  }
  return str.replace(lastVal,emoteObj[lastVal])
}
console.log(emotifySentence("Make me Smile")); 