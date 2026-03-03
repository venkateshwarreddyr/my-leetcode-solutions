// Problem: Count Days Spent Together
// LeetCode: https://leetcode.com/problems/count-days-spent-together/
// Language: javascript
// Runtime: 63 ms
// Memory: 42.2 MB
// Submitted: 2023-06-05

cl = console.log
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let a = new Array(366).fill(0)

    function aaa(s) {
        let [month, days] = s.split("-").map(e => Number(e));
        let d = days
        for (let i = 0; i < month-1; i++) {
            d += m[i]
        }
        return d
    }
    let x = aaa(leaveAlice)
    for (let i = aaa(arriveAlice); i <= x; i++) {
        a[i]++
    }
    let y = aaa(leaveBob)
    for (let i = aaa(arriveBob); i <= y; i++) {
        a[i]++
    }
    return a.filter(e => e === 2).length
};
