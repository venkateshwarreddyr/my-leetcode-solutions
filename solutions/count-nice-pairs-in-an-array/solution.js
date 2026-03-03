// Problem: Count Nice Pairs in an Array
// LeetCode: https://leetcode.com/problems/count-nice-pairs-in-an-array/
// Language: javascript
// Runtime: 37 ms
// Memory: 68.9 MB
// Submitted: 2026-01-17

//    nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
// => nums[i] - rev(nums[i]) == nums[j] - rev(nums[j])
// =>   nice pairs are pairs with same diff value
function countNicePairs(nums) {
    const MOD = 1e9 + 7;
    const freq = new Map(); // same Diff Freq

    for (const num of nums) {
        const diff = num - reverseNumber(num);
        freq.set(diff, (freq.get(diff) ?? 0) + 1);
    }

    let goodPairs = 0;
    for (let [k, count] of freq) {
        goodPairs += ((count - 1) * count) / 2;
        goodPairs %= MOD
    }

    return goodPairs;
}

function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        reversed = reversed * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return reversed;
}

