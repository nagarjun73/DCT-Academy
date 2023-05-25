/*
Input: nums = [1,3,5,6], target = 7
Output: 4
*/
const nums = [1,3,5,6], target = 2

var searchInsert = function(nums, target) {
    let arr = nums
    for(let i=0; i<nums.length; i++){
      if(nums[i] !== target){
        arr.push(target)
        break
      }
    }
    let sortArr = arr.sort(function(a,b){return a - b})
    console.log(arr);
    let newIndex = sortArr.indexOf(target)
    return newIndex
};

console.log(searchInsert(nums, target)); 