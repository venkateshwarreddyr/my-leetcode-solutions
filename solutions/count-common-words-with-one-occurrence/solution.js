// Problem: Count Common Words With One Occurrence
// LeetCode: https://leetcode.com/problems/count-common-words-with-one-occurrence/
// Language: javascript
// Runtime: 1376 ms
// Memory: 78 MB
// Submitted: 2023-05-12

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let ob1 = words1.reduce((a,c) => ({...a, [c]: ++a[c] || 1}), {});
    let ob2 = words2.reduce((a,c) => ({...a, [c]: ++a[c] || 1}), {});
    let c = 0;

    for(let [key, value] of Object.entries(ob1)){
        if(value === 1 && ob2[key] === 1){
            c++
        }
    }


    return c;
};
