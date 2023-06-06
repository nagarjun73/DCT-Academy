let zipCode = '85367'

function zipCheck(a){
  let zipStr = ''
  let spliStr = a.split()
  for(let i=0; i<spliStr.length; i++){
    if(!Number.isNaN(a[i])){
      zipStr += spliStr[i]
    }else{
      continue
    }
  }
  if(zipStr.length === 5){
    return true
  }else{
    return false
  }
}
console.log(zipCheck(zipCode));