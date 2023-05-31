let nums = [0,1,2,3,4], index = [0,1,2,2,1]
var createTargetArray = function(nums, index) {
  let target = ''
    for(let i=0; i<nums.length; i++){
      if(!target[i]){
      target += nums[i]
      }
  }
    return target
};

console.log(createTargetArray(nums, index));