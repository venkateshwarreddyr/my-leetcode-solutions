// Problem: Take K of Each Character From Left and Right
// LeetCode: https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/
// Language: javascript
// Runtime: 209 ms
// Memory: 48.8 MB
// Submitted: 2023-10-20

cl = console.log
function checkIfvaluesInObjLessThanK(v, k) {
    return Object.values(v).some((e) => e < k);
}

function takeCharacters(s, k) {
    const v = {
        a: 0,
        b: 0,
        c: 0
    };
    for (let c of s) {
        v[c]++;
    }

    if (checkIfvaluesInObjLessThanK(v, k)) {
        return -1;
    }

    let i = 0, j = 0;
    const n = s.length;
    let ans = 0;

    while (i < n) {
        v[s[i]]--;
        while (checkIfvaluesInObjLessThanK(v, k)) {
            v[s[j]]++;
            j++;
        }

        ans = Math.max(i - j + 1, ans);
        i++;
    }

    return s.length - ans;
}



