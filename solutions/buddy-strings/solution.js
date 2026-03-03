// Problem: Buddy Strings
// LeetCode: https://leetcode.com/problems/buddy-strings/
// Language: javascript
// Runtime: 72 ms
// Memory: 40.5 MB
// Submitted: 2021-05-13

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean}
 */
var buddyStrings = function(a, b) {
    let arr = a.split('');
    let brr = b.split('');
    let temp;
    let swapped = [];
    for(i =0; i< arr.length; i++ ){
        // temp = arr[i];
        // arr[i] = arr[i+1];
        // arr[i+1] = temp;
        if(arr[i] !== brr[i])
            {
                swapped.push(i)
            }
    }
    if(swapped.length == 0){
        return [...new Set(arr)].length < arr.length
    }
    if(swapped.length === 2)
     {   
         temp = arr[swapped[0]];
        arr[swapped[0]] = arr[swapped[1]];
        arr[swapped[1]] = temp;

         return arr.join('') === brr.join('')
     }
    if(arr.length == 1) return true
    return false
};
