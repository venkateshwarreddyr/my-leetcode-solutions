// Problem: Find the Punishment Number of an Integer
// LeetCode: https://leetcode.com/problems/find-the-punishment-number-of-an-integer/
// Language: javascript
// Runtime: 235 ms
// Memory: 48.8 MB
// Submitted: 2023-05-21

cl = console.log
var punishmentNumber = function (n) {
    let dfs = (val, s, an) => {
        if (s.length === 0) {
            an.push(val)
        }
        for (let i = 1; i <= s.length; i++) {
            let s1 = s.slice(0, i);
            let s2 = s.slice(i);
            // cl( s.slice(0, i), {s1, s2})
            dfs(val + Number(s1), s2, an)
        }

        return an;
    }

    fan = 0
    for (let i = 1; i <= n; i++) {
        if (dfs(0, (i * i).toString(), []).includes(i)) {
            fan += (i * i)
        }
        // cl(an)
    }

    return fan;

};
