// Problem: String to Integer (atoi)
// LeetCode: https://leetcode.com/problems/string-to-integer-atoi/
// Language: javascript
// Runtime: 2 ms
// Memory: 58.8 MB
// Submitted: 2025-12-30

var myAtoi = function (s) {
    let n = s.length;

    // skip whitespace (space only)
    let i = 0;
    while (i < n && s[i] === " ") i++;

    // skip + or - sign, remember it
    let isMinus = false;

    if (i < n) {
        switch (s[i]) {
            case "+":
                isMinus = false;
                i++;
                break;
            case "-":
                isMinus = true;
                i++;
                break;
        }
    }

    // skip intial zeros
    while (i < n && s[i] === "0") i++;

    if (i < n && (s[i] < "0" || s[i] > "9")) return 0; // not number

    // it is number

    const INT_MIN = -2147483648; // -Math.pow(2,31)       // to speedup
    const INT_MAX = 2147483647; // Math.pow(2,31) - 1    // to speedup

    let num = 0;
    while (i < n && s[i] >= "0" && s[i] <= "9") {
        num = num * 10 + (s[i] - "0"); // accumulate number
        if (num > INT_MAX) {
            return isMinus ? INT_MIN : INT_MAX; // too big - return INT_MIN/INT_MAX
        }
        i++;
    }

    // add minus if needed
    return isMinus ? -num : num;
};

var myAtoi2222222 = function (s) {
    s = s.trim()
    if ((/[a-zA-Z\.]/.test(s[0]))) return 0
    // if more than  MAX,   return MAX
    // if less than  MIN,   return MIN
    return parseInt(s) ?? 0
}

