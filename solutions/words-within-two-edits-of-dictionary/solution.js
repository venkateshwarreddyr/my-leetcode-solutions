// Problem: Words Within Two Edits of Dictionary
// LeetCode: https://leetcode.com/problems/words-within-two-edits-of-dictionary/
// Language: javascript
// Runtime: 66 ms
// Memory: 42.8 MB
// Submitted: 2023-10-10

cl = console.log
var twoEditWords = function (queries, dictionary) {


    return queries.filter((q) => {

        return dictionary.find(w => {
            let cc = 0
            for(let i=0;i<w.length;i++){
                if(w[i] !== q[i]){
                    cc++
                }
            }
            if(cc<=2) return true
            return false
        })
    })
};
