// Problem: Find the Student that Will Replace the Chalk
// LeetCode: https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk/
// Language: javascript
// Runtime: 2836 ms
// Memory: 50.3 MB
// Submitted: 2021-06-12

/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
    console.log()
    for(let i = 0;i<chalk.length;i++){
        if(chalk[i]<=k){
            
            k-=chalk[i]
            // console.log(`Student number ${i} uses ${chalk[i]} chalk, so k = ${k}.`)
        }else{
            return i;
        }
        if(i === chalk.length-1)
            i=-1;

    }
};
