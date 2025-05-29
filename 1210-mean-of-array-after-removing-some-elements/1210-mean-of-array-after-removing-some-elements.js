/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    let sort=arr.sort((a,b)=>a-b)
    let total=Math.floor(arr.length*0.05)
    let deleted=sort.slice(total,arr.length-total)
    let sum=deleted.reduce((total,value)=>total+value,0)
    let average=sum/deleted.length
    
 return average
  
};