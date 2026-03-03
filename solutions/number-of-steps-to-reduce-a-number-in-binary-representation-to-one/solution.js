// Problem: Number of Steps to Reduce a Number in Binary Representation to One
// LeetCode: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/
// Language: javascript
// Runtime: 55 ms
// Memory: 49.3 MB
// Submitted: 2024-05-29

/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(ss) {
    let counter = 0;
    let s = ss.split('')
    // s = parseInt(s,2)
    while(s.length!=1){
        // console.log({s},s.length-1, s[s.length-1] === 1)
        counter++
        if(s[s.length-1] == '1'){
            for(let i = s.length-1; i!=-1; i--){
                if(s[i] == '0') {
                    s[i] = 1;
                    s[s.length-1] = 0;
                    break;
                }
            }
            if(s[s.length-1]!='0'){
                for(let i = 0; i<s.length; i++){
                    s[i] = 0;
            }
                s.unshift(1);
        }
        }else{
            s.pop()
        }
    }
    
    return counter;
};
//"1111011110000011100000110001011011110010111001010111110001"
