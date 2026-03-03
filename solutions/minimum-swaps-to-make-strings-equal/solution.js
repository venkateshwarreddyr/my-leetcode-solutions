// Problem: Minimum Swaps to Make Strings Equal
// LeetCode: https://leetcode.com/problems/minimum-swaps-to-make-strings-equal/
// Language: javascript
// Runtime: 4 ms
// Memory: 54.4 MB
// Submitted: 2025-11-07

var minimumSwap = function (a, b) {
    let n = a.length
    let xy = 0
    let yx = 0
    for (let i = 0; i < n; i++) {
        if (a[i] === "x" && b[i] === "y") xy++;
        else if (a[i] === "y" && b[i] === "x") yx++;
    }

    console.log({ xy, yx })

    if ((xy + yx) % 2 === 1) return -1

    let result = 0;

    result += Math.floor(xy / 2);

    result += Math.floor(yx / 2);

    if (yx % 2 === 1) {
        result += 2;
    }

    return result;
};

