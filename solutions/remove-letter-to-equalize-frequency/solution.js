// Problem: Remove Letter To Equalize Frequency
// LeetCode: https://leetcode.com/problems/remove-letter-to-equalize-frequency/
// Language: javascript
// Runtime: 52 ms
// Memory: 41.8 MB
// Submitted: 2023-05-24

cl = console.log
var equalFrequency = function (word) {
    let obj = {}

    for (let c of word) {
        obj[c] = obj[c] || 0
        obj[c]++
    }

    let arr = Object.values(obj);

    for (let i = 0; i < arr.length; i++) {
        let newArr = [...arr]
        newArr[i]--;
        let set = new Set(newArr)
        set.delete(0);

        if(set.size === 1) return true
    }

    return false
};
