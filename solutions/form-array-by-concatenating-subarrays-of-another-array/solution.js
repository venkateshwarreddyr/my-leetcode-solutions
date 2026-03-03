// Problem: Form Array by Concatenating Subarrays of Another Array
// LeetCode: https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array/
// Language: javascript
// Runtime: 3 ms
// Memory: 56.6 MB
// Submitted: 2025-12-25

var canChoose = function (g, a) {
    let srows = g.map(row => ',' + row.join(',') + ',')
    let mainStr = ',' + a.join(',') + ','

    let i = 0
    for (let srow of srows) {
        i = mainStr.indexOf(srow, i)
        if (i === -1) return false
        i += srow.length - 1 // disjoint, -1 for go back the comma(,)
    }
    return true
};

var canChoose22222222 = function (g, a) {
    let m = g.length

    let i = 0
    for (let k = 0; k < a.length && i < m;) {
        let row = g[i]
        let n = row.length
        let j
        for (j = 0; (j < n) && (row[j] === a[k + j]); j++) {
            // row match continuing, in a
        }
        if (j === n) {
            // full row match
            i++
            k += n
        } else {
            k++
        }
    }
    return i === m
}

var canChoose33333333 = function (g, a) {
    let m = g.length

    let k = 0
    AA: for (let i = 0; i < m; i++) {
        let row = g[i]
        let n = row.length
        for (; k < a.length; k++) {
            // possible row match in a
            let j
            for (j = 0; (j < n) && (row[j] === a[k + j]); j++) {
                // match continuing
            }
            if (j === n) {
                // full row match
                k += n
                continue AA;
            }
        }
        return false
    }
    return true
}

