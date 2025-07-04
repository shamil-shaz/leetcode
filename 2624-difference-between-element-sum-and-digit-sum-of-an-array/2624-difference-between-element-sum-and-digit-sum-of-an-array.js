/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {

   
    //  return Math.abs(nums.reduce((elem,digit)=>elem+digit)-nums.join("").split("").reduce((elem,digit)=>   +elem + +digit))
    
    let sum=0
     for(let i=0;i<nums.length;i++){
        sum+=nums[i]
     }

     let value=nums.join('').split('').map(Number)

     let indexsum=0

      for(let i=0;i<value.length;i++){
        indexsum+=value[i]
      }

      result=sum-indexsum

      return result
};