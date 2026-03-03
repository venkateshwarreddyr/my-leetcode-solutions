// Problem: Count Pairs That Form a Complete Day II
// LeetCode: https://leetcode.com/problems/count-pairs-that-form-a-complete-day-ii/
// Language: javascript
// Runtime: 181 ms
// Memory: 88.2 MB
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
