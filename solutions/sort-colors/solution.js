// Problem: Sort Colors
// LeetCode: https://leetcode.com/problems/sort-colors/
// Language: javascript
// Runtime: 61 ms
// Memory: 51.8 MB
// Submitted: 2024-06-12

var sortColors = function (a) {
    let n = a.length;

    let swapped = true
    while (swapped) {
        swapped = false

        let i = 0; j = n - 1;
        for (; i < j;) {
            if (a[i] === 0) i++;
            else if (a[j] === 2) j--;
            else if (a[i] > a[j]) {
                [a[j], a[i]] = [a[i], a[j]]
                swapped = true
            } else if (a[i] === a[j]) {
                if (a[j - 1] > a[j]) {
                    [a[j - 1], a[j]] = [a[j], a[j - 1]]
                    swapped = true
                    j--
                } else if (a[i] > a[i + 1]) {
                    [a[i], a[i + 1]] = [a[i + 1], a[i]]
                    swapped = true
                    i++
                } else {
                    j--
                }
            }
        }
    }
    return a
};

var sortColors11111111 = function (a) {
    let z = 0, o = 0
    for (let e of a) {
        if (!e) z++
        else if (e === 1) o++
    }

    let n = a.length
    for (let i = 0; i < n; i++) {
        if (z) a[i] = 0, z--
        else if (o) a[i] = 1, o--
        else a[i] = 2
    }
    return a
}
