// Problem: Count Vowel Strings in Ranges
// LeetCode: https://leetcode.com/problems/count-vowel-strings-in-ranges/
// Language: javascript
// Runtime: 2684 ms
// Memory: 67 MB
// Submitted: 2023-06-07

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const v = "aeiou"
    const cwords = words.map(e => v.includes(e[0]) && v.includes(e[e.length-1]) ? 1 : 0);

    return queries.map((query =>{
        let [l,r] = query;
        let sum = 0;

        while(r>=l){
            sum+=cwords[l]
            l++;
        }  
        return sum;
      }
        )
        )
};
