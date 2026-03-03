// Problem: Maximum Total Importance of Roads
// LeetCode: https://leetcode.com/problems/maximum-total-importance-of-roads/
// Language: javascript
// Runtime: 432 ms
// Memory: 87.5 MB
// Submitted: 2022-05-28

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    let obj = {}
    for(let i=0;i<n;i++){
        obj[i] = 0
    }
    for(let [i,j] of roads){
        obj[i]++;
        obj[j]++;
    }
    let newObj = {}
    let entries  = Object.entries(obj).sort((a, b) => a[1]-b[1])
    let i = 1
    for(let [key, value] of entries){
        newObj[key] = i++
    }
    let sum = 0;
    // console.log(entries, newObj);
    for(let [i,j] of roads){
        sum += newObj[i];
        sum += newObj[j];
    }
    
    return sum;
};
