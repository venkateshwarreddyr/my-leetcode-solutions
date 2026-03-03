// Problem: Count the Hidden Sequences
// LeetCode: https://leetcode.com/problems/count-the-hidden-sequences/
// Language: javascript
// Runtime: 2340 ms
// Memory: 170 MB
// Submitted: 2022-01-22

/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function(differences, lower, upper) {
    let arr = new Array(upper-lower+1)
    let counter = 0;
    // for(let i=lower;i<=upper;i++){
    //     let a = new Array(differences.length+1)
    //     a[0] = i
    //     arr.push(a)
    // }
    for(let i=0;i<arr.length;i++){
        let a1 = [lower+i]
        arr[i] = a1
        let breaked = false;
        for(let j=0;j<differences.length;j++){
            arr[i][j+1] = differences[j]+arr[i][j]
            if(arr[i][j+1]<lower || arr[i][j+1]>upper) {
                breaked = true
                break;
            }
        }
        if(!breaked){
            
            return upper - Math.max(...arr[i])+1
            counter++
        }
    }
    // console.log(arr)
    return counter
};
