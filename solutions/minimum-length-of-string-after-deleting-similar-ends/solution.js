// Problem: Minimum Length of String After Deleting Similar Ends
// LeetCode: https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/
// Language: javascript
// Runtime: 59 ms
// Memory: 47.1 MB
// Submitted: 2023-11-07

cl = console.log
function getSeqCountOfSameCharFromFirst(s) {
    let i = 0
    while (s[i] === s[i + 1]) i++
    return i
}


function getSeqCountOfSameCharFromLast(s) {
    let i = s.length - 1
    while (s[i] === s[i - 1]) i--
    return s.length - i - 1
}

var minimumLength = function (s) {
    let n = s.length

    let i = 0, j = n - 1;

    for (; i < j; i++, j--) {
        if (s[i] !== s[j]) return j - i + 1
        i += getSeqCountOfSameCharFromFirst(s.slice(i))
        j -= getSeqCountOfSameCharFromLast(s.slice(0, j + 1))
    }

    if (i === j) return 1

    return 0
};
