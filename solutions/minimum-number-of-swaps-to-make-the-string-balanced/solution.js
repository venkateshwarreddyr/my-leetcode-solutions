// Problem: Minimum Number of Swaps to Make the String Balanced
// LeetCode: https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/
// Language: javascript
// Runtime: 212 ms
// Memory: 82.8 MB
// Submitted: 2021-08-08

/**
 * @param {string} s
 * @return {number}
 */

var minSwaps = function(s) {
    s = s.split('');
    counter = 0;
    checkIfValid = () => {
        let c = 0;
        for(let i of s){
            if(i==='[') 
            {c++;}
            else if(i===']') 
            {c--;}
            if(c<0) {counter = Math.min(counter, c)};
        }
    }
    checkIfValid();
    console.log(counter)
    return Math.ceil(-counter/2)
};























var minSwaps11 = function(s) {
    s = s.split('');
    let x = ""
    func = (s) => {
    while(true){
        x = s.replaceAll("[]",'');
        if(x.length === s.length) break
        s = x
    }
        return s.split('');
    }
    counter = 0;
    s = func(s.join(''))
    for(let i =0; i<s.length;i++){
        if(!s.length) return counter;
        if(s[i] === ']')
        for(let j =s.length-1 ; j!=0;j--){
            if(s[j] === '['){
                counter++
                let temp = s[i];
                s[i] = s[j];
                s[j] = temp;
                s = func(s.join(''))
                i-=1;
                break;
            }
        }
        
    }
    return counter
};



