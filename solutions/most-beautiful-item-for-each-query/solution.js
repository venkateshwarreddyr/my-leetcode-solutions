// Problem: Most Beautiful Item for Each Query
// LeetCode: https://leetcode.com/problems/most-beautiful-item-for-each-query/
// Language: javascript
// Runtime: 88 ms
// Memory: 90.4 MB
// Submitted: 2025-11-21

/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    items.sort((a, b) => a[0] - b[0])

    let max = 0

    for (let c of items) {
        c[1] = max = max = Math.max(c[1], max)
    }

    function upper_bound_g(arr, target, L = 0, R = arr.length) {
        while (L < R) {
            let mid = ~~(L / 2 + R / 2);

            arr[mid][0] <= target ? (L = mid + 1) : (R = mid);
        }

        return L;
    }

    return queries.map(q => upper_bound_g(items, q)).map(e => items[e - 1]?.[1] ?? 0)
};
