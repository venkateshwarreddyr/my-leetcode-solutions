// Problem: Longest Nice Substring
// LeetCode: https://leetcode.com/problems/longest-nice-substring/
// Language: javascript
// Runtime: 89 ms
// Memory: 46.4 MB
// Submitted: 2023-05-23

cl = console.log
var longestNiceSubstring = function (s) {
    const parse = (str) => {
        let n = str.length;
        if (n < 2) return '';

        let obj = {};
        for (let c of str) {
            obj[c] = obj[c] || 0
            obj[c]++
        }

        for (let i = 0; i < n; i++) {
            c = str[i]
            if (obj[c.toUpperCase()] && obj[c.toLowerCase()]) {
                continue;
            }
            let str1 = parse(str.slice(0, i))
            let str2 = parse(str.slice(i + 1))

            return str1.length >= str2.length ? str1 : str2
        }

        return str;
    }
    let an = parse(s)
    cl(an)


    return an
};
