// Problem: Construct the Lexicographically Largest Valid Sequence
// LeetCode: https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/
// Language: javascript
// Runtime: 5 ms
// Memory: 54.5 MB
// Submitted: 2025-11-02

var constructDistancedSequence = function (n) {
    const m = 2 * n - 1;
    const arr = new Array(m).fill(0);
    const used = new Array(n + 1).fill(false);

    function backtrack(i) {

        while (i < m && arr[i] !== 0) i++;
        if (i === m) return true;


        for (let num = n; num >= 1; num--) {
            if (used[num]) continue;

            if (num === 1) {
                arr[i] = 1;
                used[1] = true;
                if (backtrack(i + 1)) return true;
                arr[i] = 0;
                used[1] = false;
            } else if (i + num < m && arr[i + num] === 0) {
                arr[i] = arr[i + num] = num;
                used[num] = true;
                if (backtrack(i + 1)) return true;
                arr[i] = arr[i + num] = 0;
                used[num] = false;
            }
        }
        return false;
    }

    backtrack(0);
    return arr;
};

