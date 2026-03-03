// Problem: Add Minimum Number of Rungs
// LeetCode: https://leetcode.com/problems/add-minimum-number-of-rungs/
// Language: javascript
// Runtime: 181 ms
// Memory: 50.5 MB
// Submitted: 2021-07-18

/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs1 = function(rungs, dist) {
    let counter = 0;
    if(rungs[0]>dist){
        counter ++;
        rungs.splice(0, 0, dist)
    }
    let min = 0
    for(let i=0; i<rungs.length; i++){
        if(rungs[i+1]-rungs[i]>dist){
            counter++;
            rungs[i] = (rungs[i]+dist);
            i--
        }
    }
    return counter;
};
/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
    let counter = 0;
    if(rungs[0]>dist){
        counter ++;
        rungs.splice(0, 0, dist)
    }
    let min = 0
    for(let i=0; i<rungs.length; i++){
        if(rungs[i+1]-rungs[i]>dist){
            counter += Math.floor((rungs[i+1]-rungs[i]-1)/dist)
        }
    }
    return counter;
};
