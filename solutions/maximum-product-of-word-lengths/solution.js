// Problem: Maximum Product of Word Lengths
// LeetCode: https://leetcode.com/problems/maximum-product-of-word-lengths/
// Language: javascript
// Runtime: 5228 ms
// Memory: 77.4 MB
// Submitted: 2021-05-29

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let ans = 0;
    let newArr = []
    words.forEach(e => {
        newArr.push(new Set(e))
    })
    function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let elem of setB) {
        _difference.delete(elem)
    }
    return _difference
}
    for(let i = 0; i< newArr.length; i++){
        for(let j = 0; j< newArr.length; j++){
           
            if(newArr[i].size===difference(newArr[i],newArr[j]).size){
                let res = words[i].length*words[j].length;
                if(res>ans)  ans = res;
            }
        }
    }
    return ans;
};
