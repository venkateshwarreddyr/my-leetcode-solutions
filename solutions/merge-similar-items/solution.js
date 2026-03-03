// Problem: Merge Similar Items
// LeetCode: https://leetcode.com/problems/merge-similar-items/
// Language: javascript
// Runtime: 103 ms
// Memory: 49.6 MB
// Submitted: 2023-05-10

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let ob = {}
    let an = []
    
    for(let item of items1){
        ob[item[0]] = item[1]
    }  
    
    for(let item of items2){
        ob[item[0]] = (ob[item[0]] || 0)+item[1]
    }
    
   
    
    return Object.entries((ob))
};
