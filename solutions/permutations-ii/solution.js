// Problem: Permutations II
// LeetCode: https://leetcode.com/problems/permutations-ii/
// Language: javascript
// Runtime: 88 ms
// Memory: 46.9 MB
// Submitted: 2023-07-12

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
nums.sort((a, b) => (a - b))
    let an = []
    let n = nums.length;
    let set = new Set()
    function bt(seti, a) {
        if (set.has(a.toString())) return;
        set.add(a.toString());
        if (a.length === n) {
            an.push([...a])
            return;
        }
        for (let i = 0; i < n; i++) {
            if (seti.has(i)) continue;
            seti.add(i)
            a.push(nums[i])
            bt(seti, a)
            a.pop()
            seti.delete(i)
        }
    }

    bt(new Set(), [])

    return an;
};
