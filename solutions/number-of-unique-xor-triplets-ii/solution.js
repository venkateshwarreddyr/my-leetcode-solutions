// Problem: Number of Unique XOR Triplets II
// LeetCode: https://leetcode.com/problems/number-of-unique-xor-triplets-ii/
// Language: javascript
// Runtime: 490 ms
// Memory: 62.3 MB
// Submitted: 2026-01-17

/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function (nums) {
    let set = new Set()

    for (let num1 of nums) {
        for (let num2 of nums) {
            set.add(num1 ^ num2)
        }
    }

    let new_set = new Set()
    for (let num1 of nums) {
        for (let num2 of set) {
            new_set.add(num1 ^ num2)
        }
    }

    return new_set.size
};

var uniqueXorTriplets = function (nums) {
    nums = [...new Set(nums)]
    if (nums.length === 1) return 1
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j]
            set.add(num1 ^ num2)
        }
    }

    let new_set = new Set()
    for (let num1 of nums) {
        for (let num2 of set) {
            new_set.add(num1 ^ num2)
        }
    }

    return new_set.size
};

var uniqueXorTriplets = function (nums) {
    const MAX = 2048;

    const present = new Array(MAX).fill(false);
    for (let x of nums) present[x] = true;

    const pairXor = new Array(MAX).fill(false);
    for (let a = 0; a < MAX; a++) {
        if (!present[a]) continue;
        for (let b = 0; b < MAX; b++) {
            if (!present[b]) continue;
            pairXor[a ^ b] = true;   // allows a === b
        }
    }

    const triplet = new Array(MAX).fill(false);
    for (let c = 0; c < MAX; c++) {
        if (!present[c]) continue;
        for (let x = 0; x < MAX; x++) {
            if (!pairXor[x]) continue;
            triplet[c ^ x] = true;
        }
    }

    let count = 0;
    for (let v of triplet) if (v) count++;
    return count;
};

