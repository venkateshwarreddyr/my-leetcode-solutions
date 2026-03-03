// Problem: Reverse Only Letters
// LeetCode: https://leetcode.com/problems/reverse-only-letters/
// Language: javascript
// Runtime: 51 ms
// Memory: 41.7 MB
// Submitted: 2023-05-20

const isLetter = (char) => {
    let code = char.charCodeAt(0);
    if (
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122)) {
        return true;
    }
    return false
}

var reverseOnlyLetters = function (s) {
    let n = s.length;
    let i = 0, j = n - 1;
    let an = "";

    while (i < n && j > -1) {
        if (i == j) {
            an += s[i];
            i++;
            j--;
        } else if (isLetter(s[i]) && isLetter(s[j])) {
            an += s[j];
            i++;
            j--;
        } else if (!isLetter(s[i])) {
            an += s[i];
            i++;
        } else if (!isLetter(s[j])) {
            j--;
        }
    }

    while (i < n) {
        an += s[i]
        i++
    }

    while (j > -1) {
        if (isLetter(s[j]))
            an += s[j]
        j--
    }


    return an;
};
