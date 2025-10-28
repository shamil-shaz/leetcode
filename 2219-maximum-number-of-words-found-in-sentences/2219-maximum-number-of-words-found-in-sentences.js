/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {

    let max=0;

    for(let i=0;i<sentences.length;i++){
        let word=sentences[i].split(' ')
        let count=word.length

        if(count>max){
            max=count
        }

    
    }

 

    return max
};