// Problem: Subsets II
// LeetCode: https://leetcode.com/problems/subsets-ii/
// Language: javascript
// Runtime: 0 ms
// Memory: 58.6 MB
// Submitted: 2025-10-26

var subsetsWithDup = function (a) {
    a = a.map(x => x + 10)
    a.sort((a, b) => a - b)
    let n = a.length

    let res = []
    let inter = []
    function bt(pos) {
        res.push([...inter])

        let bitmap = 0
        for (let i = pos; i < n; i++) {
            if (bitmap & (1 << a[i])) continue
            bitmap |= 1 << a[i]

            inter.push(a[i] - 10)
            bt(i + 1)
            inter.pop()
        }
    }

    bt(0)

    return res;
};

