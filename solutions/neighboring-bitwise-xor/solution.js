// Problem: Neighboring Bitwise XOR
// LeetCode: https://leetcode.com/problems/neighboring-bitwise-xor/
// Language: javascript
// Runtime: 276 ms
// Memory: 76.8 MB
// Submitted: 2023-05-20

cl = console.log
var doesValidArrayExist = function (d) {
    let n = d.length;
    arr = [0];
    for (let i = 0; i < n; i++) {
        if (d[i] === 1) {
            if (arr[i] === 1) {
                arr.push(0)
            } else {
                arr.push(1)
            }
        } else {
            if (arr[i] === 1) {
                arr.push(1)
            } else {
                arr.push(0)
            }
        }
    }
    cl(arr);
    arr.pop()
    for (let i = 0; i < n; i++) {
        if (arr[i] ^ arr[(i + 1) % n] === d[i]) {

        } else {
            return false
        }
    }

    return true

};
