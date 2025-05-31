/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    // let arr=[]
    //  let max=Math.max(...candies)
    // for(let i=0;i<candies.length;i++){
    //         arr.push(candies[i]+extraCandies>=max)           
    // }

    // return arr 


    let arr=[]
     let max=Math.max(...candies)

      for(let i=0;i<candies.length;i++){

        arr[arr.length]=candies[i]+extraCandies
      }

    for(let i=0;i<arr.length;i++){
        if(arr[i]>=max){

            arr[i]=true
            
        }else{
            arr[i]=false
        }
    }

return arr 
    
};