// Problem: Lemonade Change
// LeetCode: https://leetcode.com/problems/lemonade-change/
// Language: javascript
// Runtime: 87 ms
// Memory: 50.8 MB
// Submitted: 2023-05-31

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let fives = 0
    let tens = 0
    let twentys = 0

    for (let bill of bills) {
        if (bill === 5) {
            fives++
        } else if (bill === 10) {
            tens++
            if (fives) {
                fives--
            } else {
                return false
            }
        } else {
            twentys++
            if (fives && tens) {
                tens--
                fives--
            } else {
                if (fives >= 3) {
                    fives -= 3
                } else {
                    return false;
                }
            }
        }
    }

    return true
};
