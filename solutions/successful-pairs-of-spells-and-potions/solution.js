// Problem: Successful Pairs of Spells and Potions
// LeetCode: https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
// Language: javascript
// Runtime: 229 ms
// Memory: 68.4 MB
// Submitted: 2023-10-10

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
    potions.sort((a, b) => a - b)

    function lower_bound_eg(arr, target, L = 0, R = arr.length) {
        while (L < R) {
            let mid = ~~(L / 2 + R / 2);
            arr[mid] < target ? (L = mid + 1) : (R = mid);
        }
        return L;
    }

    return spells.map(e => potions.length - lower_bound_eg(potions, success / e))
};
