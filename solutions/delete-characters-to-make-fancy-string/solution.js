// Problem: Delete Characters to Make Fancy String
// LeetCode: https://leetcode.com/problems/delete-characters-to-make-fancy-string/
// Language: javascript
// Runtime: 5753 ms
// Memory: 73.8 MB
// Submitted: 2021-08-07

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    s = s.split('');
    for(let i =1; i< s.length-1; i++){
        if(s[i-1] === s[i]){
            let k =1;
            while(s[i]===s[i+k]){
                k++;
            }
            // console.log({i,k})
            s.splice(i, k-1);
            // i--;
        }
    }
    
    return s.join('')
};
