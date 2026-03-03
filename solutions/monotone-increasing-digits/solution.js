// Problem: Monotone Increasing Digits
// LeetCode: https://leetcode.com/problems/monotone-increasing-digits/
// Language: javascript
// Runtime: 1 ms
// Memory: 54.1 MB
// Submitted: 2026-01-17

var monotoneIncreasingDigits = function (num) {
    const digits = ('' + num).split('').map(x => +x);
    const n = digits.length;

    // change from rightmost   digit[R-1] > digit[R]
    let i_9fromHereOn = n;

    // 753
    //    75>3
    // -> 74 3(i)
    // -> 7>43(i)
    // -> 64(i)3
    for (let R = n - 1; R > 0; R--) {
        if (digits[R - 1] > digits[R]) {
            digits[R - 1]--;
            i_9fromHereOn = R;
        }
    }

    // 699 - Set all to 9 - from i_9fromHereOn
    for (let i = i_9fromHereOn; i < n; i++) {
        digits[i] = 9;
    }

    return +digits.join('');
};

