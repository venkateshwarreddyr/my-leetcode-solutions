// Problem: Count Items Matching a Rule
// LeetCode: https://leetcode.com/problems/count-items-matching-a-rule/
// Language: javascript
// Runtime: 124 ms
// Memory: 43 MB
// Submitted: 2021-06-07

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    let indexObj = {
        type: 0,
        color: 1,
        name: 2
    }
    let index = indexObj[ruleKey];
    for(let item of items){
        // if(ruleKey == 'type' && i[0]== ruleValue) count++;
        // else if(ruleKey == 'color' && i[1]==ruleValue) count++;
        // else if(ruleKey == 'name' && i[2]==ruleValue) count++;
        if(item[index] === ruleValue) count++;
    }
    return count;
};
