const arr1 = [
    {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
],
arr2 = [
    {"id": 1, "b": {"c": 84}, "v": [1, 3]}
]

var join = function(arr1, arr2) {
    let joinedArr = arr1.concat(arr2)
    let finArr = []
    for(let i=0; i<joinedArr.length; i++){
    if(joinedArr[i+1]){
        if(joinedArr[i].id == joinedArr[i+1].id ){
          if(Object.keys(joinedArr[i]).length > Object.keys(joinedArr[i+1]).length){
            finArr.push(joinedArr[i])
            i++
          }else{
            finArr.push(joinedArr[i+1])
            i++
          }
        }else{
          finArr.push(joinedArr[i])
        }
      }
    }
      return finArr
};

console.log(join(arr1, arr2));