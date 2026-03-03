// Problem: Heaters
// LeetCode: https://leetcode.com/problems/heaters/
// Language: javascript
// Runtime: 114 ms
// Memory: 49.4 MB
// Submitted: 2023-06-28

cl = console.log
const outOfBound = (i, n) => i > -1 && i < n
function bins(a, tar, lo = 0, hi = a.length - 1) {

    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)
        if (a[mid] === tar) {
            return 0 //           found
        } else if (a[mid] < tar) {
            lo = mid + 1 //         tar on right
        } else {
            hi = mid - 1 //         tar on left
        }
    }
    let x = lo === a.length ? hi : lo
    let b = Math.abs(tar - (a[x] || Infinity))
    let c = Math.abs(tar - (a[x - 1] || Infinity))
    let d = Math.abs(tar - (a[x + 1] || Infinity))
    return Math.min(outOfBound(x) ? Infinity : b, outOfBound(x - 1) ? Infinity : c, outOfBound(x + 1) ? Infinity : d)
}

var findRadius = function (houses, heaters) {
    houses.sort((a, b) => a - b)
    heaters.sort((a, b) => a - b)
    let inds = []
    houses.forEach(e => {
        inds.push(bins(heaters, e))
    })

    cl(inds)
    return Math.max(...inds)
};
