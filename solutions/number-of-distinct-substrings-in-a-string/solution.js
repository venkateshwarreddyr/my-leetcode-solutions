// Problem: Number of Distinct Substrings in a String
// LeetCode: https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/
// Language: javascript
// Runtime: 324 ms
// Memory: 71.9 MB
// Submitted: 2024-05-21

var countDistinct = function(s) {
    const n = s.length;
    const trie = {};
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        let curr = trie;
        
        for (let j = i; j < n; j++) {
            const char = s.charAt(j);
            
            if (!curr[char]) {
                curr[char] = {};
                count++;
            }
            
            curr = curr[char];
        }
        
        curr.end = true;
    }
    
    return count;
}
