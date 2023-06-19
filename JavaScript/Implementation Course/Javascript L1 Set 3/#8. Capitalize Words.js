
function capitalizeWords(str){
  let res = ''
  let spW = str.split(' ')
  for(let i=0; i<spW.length; i++){
    res += spW[i][0].toUpperCase() + spW[i].slice(1) + ' '
  }
  return res.trim()
}

console.log(capitalizeWords('js string exercises'));