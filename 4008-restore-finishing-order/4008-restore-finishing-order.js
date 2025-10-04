/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {

    let friendsSet = new Set(friends);
    let result = [];

    for (let id of order) {
        if (friendsSet.has(id)) {
            result.push(id);
        }
    }

    return result;
    
};