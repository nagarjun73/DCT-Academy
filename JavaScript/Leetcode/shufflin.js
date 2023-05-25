let s = "codeleet"
let indices = [4,5,6,7,0,1,2,3]



var restoreString = function(s, indices) {
    let str = ''
    for(let i=0; i<s.length; i++){
        for(let j=0; j<indices.length; j++){
            if(i === indices[j]){
                str += s[j]
            }
        }
    }
  return str
};

console.log(restoreString(s, indices)); 