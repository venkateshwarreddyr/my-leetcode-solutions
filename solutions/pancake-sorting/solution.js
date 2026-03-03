// Problem: Pancake Sorting
// LeetCode: https://leetcode.com/problems/pancake-sorting/
// Language: javascript
// Runtime: 70 ms
// Memory: 44.9 MB
// Submitted: 2023-07-26

cl = console.log
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (a) {
    let n = a.length
    let an = []
    function flip(i) {
        an.push(i + 1)
        a = a.slice(0, i + 1).reverse().concat(a.slice(i + 1))
    }

    for (let i = n - 1; i > -1; i--) {
        if (a[i] === i + 1) continue
        for (let j = i - 1; j > -1; j--) {
            if (a[j] === i + 1) {
                flip(j)
                flip(i)

            }
        }
    }

    return an;
};

/**

3,2,4,1
2,3,4,1
4,3,2,1
1,2,3,4

3,2,4,1



 */
