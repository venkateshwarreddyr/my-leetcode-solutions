// Problem: 3Sum With Multiplicity
// LeetCode: https://leetcode.com/problems/3sum-with-multiplicity/
// Language: javascript
// Runtime: 42 ms
// Memory: 57 MB
// Submitted: 2026-01-10

let MOD = 10 ** 9 + 7;

var threeSumMulti = function (a, target) {
    let n = a.length;

    a.sort((a, b) => a - b);

    // a[i] + L + R = target
    let count = 0;
    for (let i = 0; i < n; i++) {
        let search = target - a[i]; //  L + R = target -i

        for (let L = i + 1, R = n - 1; L < R;) {
            let search2 = a[L] + a[R]; // target;

            if (search2 === search) {
                if (a[L] !== a[R]) {
                    let ccleft = 1; //  count of equal on left
                    let ccright = 1; // count of equal on right
                    while (L + 1 < R && a[L] == a[L + 1]) ccleft++, L++;
                    while (R - 1 > L && a[R] == a[R - 1]) ccright++, R--;
                    count += ccleft * ccright;
                    count %= MOD;
                    L++;
                    R--;
                } else {
                    let len = R - L;
                    count += (len * (len + 1)) / 2; // pairs
                    count %= MOD;
                    break;
                }
            } else if (search2 < search) {
                L++;
            } else {
                R--;
            }
        }
    }

    return count;
};

