// Problem: Sort the Jumbled Numbers
// LeetCode: https://leetcode.com/problems/sort-the-jumbled-numbers/
// Language: javascript
// Runtime: 374 ms
// Memory: 84.4 MB
// Submitted: 2025-12-06

/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function (mapping, nums) {
    const mappedNums = nums.map((num, i) => {
        let mappedNum = ''
        s = num.toString()

        for (let c of s) {
            mappedNum += mapping[+c]
        }

        return [+mappedNum, num]
    })

    mappedNums.sort((a, b) => a[0] - b[0])

    return mappedNums.map(e => e[1])
};
