const words = ["pay","attention","practice","attend"], pref = "at"

var prefixCount = function(words, pref) {
  let count = 0
    for(let i=0; i<words.length; i++){
      if(words[i].slice(0,pref.length) === pref){
        count++
      }
    }
    return count
};

console.log(prefixCount(words, pref));