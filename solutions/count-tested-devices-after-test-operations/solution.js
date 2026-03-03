// Problem: Count Tested Devices After Test Operations
// LeetCode: https://leetcode.com/problems/count-tested-devices-after-test-operations/
// Language: javascript
// Runtime: 61 ms
// Memory: 42.2 MB
// Submitted: 2023-12-10

cl = console.log
/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(a) {
    
    let n=a.length
    let cc = 0
    for(let i=0;i<n;i++) {
        if(a[i]>0) {
            for(let j=i+1;j<n;j++) {
                if(a[j] > 0) {
                    a[j]--
                }
            }
                    cc++
            
        }
    }
    
    return cc
};
