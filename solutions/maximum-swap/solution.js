// Problem: Maximum Swap
// LeetCode: https://leetcode.com/problems/maximum-swap/
// Language: javascript
// Runtime: 0 ms
// Memory: 53.8 MB
// Submitted: 2026-01-17

function maximumSwap(num) {
    const digits = ('' + num).split('').map(x => +x);
    const n = digits.length;

    // remember last position of each digit
    const lastDigitIndex = new Array(10).fill(-1);
    for (let i = 0; i < n; i++) {
        let d = digits[i]
        lastDigitIndex[d] = i;
    }

    for (let L = 0; L < n; L++) {
        const d = digits[L]; // 1  in  11223311

        for (let biggerDigit = 9; d < biggerDigit; biggerDigit--) {
            // last index of  largest and Greater than me
            const R = lastDigitIndex[biggerDigit]; // last 3  in  11223311
            if (L < R) {
                // last 3  in  11223311
                // swap and done
                [digits[L], digits[R]] = [digits[R], digits[L]];
                return +digits.join('');
            }
        }
    }

    // equal elements, decreasing, etc - swap wont improve the num
    return num;
}

