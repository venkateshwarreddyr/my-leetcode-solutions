// Problem: Find the Longest Balanced Substring of a Binary String
// LeetCode: https://leetcode.com/problems/find-the-longest-balanced-substring-of-a-binary-string/
// Language: javascript
// Runtime: 233 ms
// Memory: 52.6 MB
// Submitted: 2023-04-02

/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    findBalance = (ss) => {
        
        let counter = 0;
        let n = ss.length/2
        for(let i=0;i<n;i++){
            if(ss[i]!=='0') return 0;
        }
        for(let i=n;i<ss.length;i++){
            if(ss[i]!=='1') return 0;
        }
        console.log({ss, counter: ss.length})
        return ss.length;
    }
    let max = 0;
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length;j++){
            let a = findBalance(s.substring(i,j+1));
            if(a>max){
                max = a;
            }
        }
    }
    
    return max;
};
