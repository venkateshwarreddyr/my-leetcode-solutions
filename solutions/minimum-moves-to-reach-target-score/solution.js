// Problem: Minimum Moves to Reach Target Score
// LeetCode: https://leetcode.com/problems/minimum-moves-to-reach-target-score/
// Language: javascript
// Runtime: 90 ms
// Memory: 38.2 MB
// Submitted: 2022-01-16

/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function(target, maxDoubles) {
    let value = 1
    let counter = 0
    while(target!=value){
        if(maxDoubles && target%2===0){
            maxDoubles--
            target/=2
        }else if(maxDoubles===0){
            counter = counter + target -2
            target = 1
        }else{
            target--
        }
        counter++
    }
    return counter
};
