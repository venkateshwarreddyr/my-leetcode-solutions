// Problem: Fruits Into Baskets II
// LeetCode: https://leetcode.com/problems/fruits-into-baskets-ii/
// Language: javascript
// Runtime: 2 ms
// Memory: 54.9 MB
// Submitted: 2025-10-12

/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
const numOfUnplacedFruits = (fruits, basketCapacity) => {
    const n = fruits.length;
    const used = Array(n).fill(false);
    let unplacedFruitCount = n;

    for (const fruitQty of fruits) {
        for (let i = 0; i < n; i++) {
            if (!used[i] && basketCapacity[i] >= fruitQty) {
                used[i] = true;
                unplacedFruitCount -= 1;
                break;
            }
        }
    }

    return unplacedFruitCount;
};

