// Problem: Combination Sum
// LeetCode: https://leetcode.com/problems/combination-sum/
// Language: javascript
// Runtime: 76 ms
// Memory: 45.6 MB
// Submitted: 2023-07-11

cl = console.log
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let n = candidates.length;
    let an = []

    function bt(i, a, sum) {
        if (sum === target) {
            an.push([...a])
            return;
        }
        if (sum > target) return;
        if (i === n) return;

        a.push(candidates[i])
        bt(i, a, sum + candidates[i])
        a.pop()
        bt(i + 1, a, sum)
    }

    bt(0, [], 0)

    return an;

};

var combinationSum1 = function (candidates, target) {
    const ans = []
    function solution(temp, idx, sum) {
        if (sum == target) {
            ans.push([...temp])
            return
        }
        if (sum > target || idx == candidates.length) {
            return
        }
        temp.push(candidates[idx])
        solution(temp, idx, sum + candidates[idx])
        temp.pop()
        solution(temp, idx + 1, sum)

    }
    solution([], 0, 0)
    return ans


};

/**


 */
