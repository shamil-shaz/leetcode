/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {

    let result = 0;

    for (let num of nums) {
        let rem = num % 3;
        result += Math.min(rem, 3 - rem); 
    }

    return result;
    
};