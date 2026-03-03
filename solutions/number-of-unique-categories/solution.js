// Problem: Number of Unique Categories
// LeetCode: https://leetcode.com/problems/number-of-unique-categories/
// Language: javascript
// Runtime: 183 ms
// Memory: 60.2 MB
// Submitted: 2024-04-30

/**
 * Definition for a category handler.
 * class CategoryHandler {
 *     @param {number[]} categories
 *     constructor(categories);
 * 
 *     @param {number} a
 *     @param {number} b
 *     @return {boolean}
 *     haveSameCategory(a, b);
 * }
 */
/**
 * @param {number} n
 * @param {CategoryHandler} categoryHandler
 * @return {number}
 */
var numberOfCategories = function(n, categoryHandler) {
    let set = new Set()

    for(let i=0;i<=100;i++) {
        for(let j=i+1;j<=100;j++) {
            if (categoryHandler.haveSameCategory(i, j)) {
                set.add(i)

            } else {
            }
        }
    }

    return n - set.size
};
