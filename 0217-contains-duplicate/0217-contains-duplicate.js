/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // let count={}

    //  for(let i=0;i<nums.length;i++){

    //     count[nums[i]]=(count[nums[i]]||0)+1

    //  }
    
    //   for(let value in count){
    //     if(count[value]>1){
    //         return true
    //     }
        
    //   }
    //   return false


    let seen = new Set();

  for (let num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }

  return false;
    
};