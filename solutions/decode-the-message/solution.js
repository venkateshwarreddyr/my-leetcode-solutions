// Problem: Decode the Message
// LeetCode: https://leetcode.com/problems/decode-the-message/
// Language: javascript
// Runtime: 73 ms
// Memory: 44.8 MB
// Submitted: 2023-05-10

let cl = console.log;

var decodeMessage = function(key, m) {
    let obj = {};
    let an = "";

    let alp = "abcdefghijklmnopqrstuvwxyz"
    key = key.split(" ").join('').split("");
    let j = 0
    for(let i=0;i<key.length;i++){
        if(!obj[key[i]])
            {
                obj[key[i]] = alp[j]
                j++
            }
        
    }

    for(let i=0; i<m.length; i++){
        an+=(obj[m[i]] || " ")
    }
    
    return an;
};
