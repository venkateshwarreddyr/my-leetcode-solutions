// Problem: Count Pairs That Form a Complete Day I
// LeetCode: https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/
// Language: javascript
// Runtime: 133 ms
// Memory: 56.5 MB
// Submitted: 2024-06-16

/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    hours = hours.map(e => e %24)
    let ob = {}
    let an = 0
    for(let e of hours) {
        let x = (24-e) % 24
        ob[x] = ob[x] ?? 0
        if(ob[e]) {
            an+=(ob[e])
        }
        ob[x]++
    }
    console.log(hours, ob)
    return an
};
