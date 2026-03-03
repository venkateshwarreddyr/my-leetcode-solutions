// Problem: Filling Bookcase Shelves
// LeetCode: https://leetcode.com/problems/filling-bookcase-shelves/
// Language: javascript
// Runtime: 4 ms
// Memory: 58.1 MB
// Submitted: 2025-11-06

var minHeightShelves = function (books, shelfWidth) {
    const n = books.length;
    const memo = new Map();

    function fn(i, width, height) {
        if (i === n) return height;
        const key = `${i},${width},${height}`;
        if (memo.has(key)) return memo.get(key);

        let [w, h] = books[i];
        let res = Infinity;

        if (width + w <= shelfWidth) {
            res = fn(i + 1, width + w, Math.max(height, h));
        }

        res = Math.min(res, height + fn(i + 1, w, h));

        memo.set(key, res);
        return res;
    }

    return fn(0, 0, 0);
};

