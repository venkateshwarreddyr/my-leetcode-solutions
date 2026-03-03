// Problem: Count Number of Homogenous Substrings
// LeetCode: https://leetcode.com/problems/count-number-of-homogenous-substrings/
// Language: javascript
// Runtime: 74 ms
// Memory: 47.9 MB
// Submitted: 2023-11-09

cl = console.log
function getSeqCountOfSameCharFromFirst(s) {
    let i = 0;
    while (s[i] === s[i + 1]) i++;
    return i + 1;
}
MOD = 10 ** 9 + 7
var countHomogenous = function (s) {
    let n = s.length
    let an = s.length

    for (let i = 0; i < n;) {
        let count = getSeqCountOfSameCharFromFirst(s.slice(i))

        an += ((count * (count - 1) / 2))
        an %= (MOD)
        i += count
    }

    return an

};
