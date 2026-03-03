// Problem: Find the Longest Semi-Repetitive Substring
// LeetCode: https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/
// Language: javascript
// Runtime: 204 ms
// Memory: 51.1 MB
// Submitted: 2023-06-10

var longestSemiRepetitiveSubstring = function(s) {
    let n = s.length
    
    let max = -Infinity
    for (let i=0;i<n;i++){
        
        let cc = 1
        let repeated = 0
        for (let j=i+1;j<n;j++){
            if (s[j-1] !== s[j]) {
                cc++
            } else {
                if(repeated) {
                    break
                }
                cc++
                repeated = 1
            }
        }
        max = Math.max(max, cc)
    }
    
    return max
};

