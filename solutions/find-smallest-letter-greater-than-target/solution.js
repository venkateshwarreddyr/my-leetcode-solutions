// Problem: Find Smallest Letter Greater Than Target
// LeetCode: https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.8 MB
// Submitted: 2026-01-31


let bs = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid - 1] >= target && arr[mid] < target) {
            return mid;
        }
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
cl = console.log
var nextGreatestLetter = function (letters, target) {
    let n = letters.length
    let ind = bs(letters, target)

    if (ind === n || ind === -1) return letters[0]
    return letters[ind]
};
