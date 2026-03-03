// Problem: Valid Mountain Array
// LeetCode: https://leetcode.com/problems/valid-mountain-array/
// Language: javascript
// Runtime: 84 ms
// Memory: 41.9 MB
// Submitted: 2021-05-30

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let maxInd = -1;
    let maxVal = -1;
    for(let i = 0; i<arr.length; i++ ){
        if(arr[i]>maxVal){
            maxVal = arr[i];
            maxInd = i;
        }
    }
    let increased =false;    
    let decreased =false;
    for(let i = maxInd; i!=0;i--){
        if(arr[i]<=arr[i-1]) return false;
        else if(arr[i]>arr[i-1])increased = true;
        // else return false;
    }
//     
    // console.log({maxVal, maxInd, increased , increased})
    for(let i = maxInd; i<arr.length-1;i++){
        if(arr[i]<=arr[i+1]) return false
        else if(arr[i]>arr[i+1]) decreased = true
        // else return false;
    }
    // console.log({maxVal, maxInd, increased , increased})
    if(decreased && increased)
        return true;
    else
        return false;
};
