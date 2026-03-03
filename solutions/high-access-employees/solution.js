// Problem: High-Access Employees
// LeetCode: https://leetcode.com/problems/high-access-employees/
// Language: javascript
// Runtime: 1494 ms
// Memory: 123.1 MB
// Submitted: 2023-11-12

cl = console.log
/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function(access_times) {
    let a = Array.from({length:24*60}, ()=> ([]))
    let maxkeys = new Set(), maxValue = 3
    for(let [e, time] of access_times) {
        
        let hour = +time.slice(0, 2)
        let minutes = +time.slice(2)
        let x = hour * 60 + minutes
        a[x].push(e)
        // a[hour][e]++
        // if(a[hour][e] > maxValue) {
        //     maxkeys = [e]
        // } else if(a[hour][e] === maxValue) {
        //     maxkeys.push(e)
        // }
    }

    for(let i = 0;i<24*60; i++) {
        let ob = {}
        for(let j=i;j<i+60 && j<24*60;j++) {
            for(let e of a[j]) {
                ob[e] = ob[e] || 0
                ob[e]++
            }
        }

            for(let key in ob) {
                 if(ob[key] >= maxValue) {
                    maxkeys.add(key)
            }
            }
        
    }
    return [...maxkeys]
};
