const leftRightDifference = function(nums) {
    let leftSum = [0]
    let result1 = 0
    for(let i=0; i<nums.length-1; i++){
      result1 += nums[i]
        leftSum.push(result1)
    }

    let rightSum = [0]
    let result2 = 0
    for(let i=nums.length-1; i>0; i--){
      result2 += nums[i]
        rightSum.unshift(result2)
    }

    let finalResult = []
    for(let i=0; i<nums.length; i++){
      finalResult.push(Math.abs(leftSum[i]-rightSum[i]))
    }

    return finalResult
};

console.log(leftRightDifference([10,4,8,3]));