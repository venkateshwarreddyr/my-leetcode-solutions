// Problem: Check If Word Is Valid After Substitutions
// LeetCode: https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/
// Language: javascript
// Runtime: 90 ms
// Memory: 46.6 MB
// Submitted: 2023-07-02

cl = console.log
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let st = []

    for (let c of s) {
        st.push(c)
        let top = st.length - 1
        while (st[top] === "c" && st[top - 1] === "b" && st[top - 2] === "a") {
            st.pop()
            st.pop()
            st.pop()
            top = st.length - 1;
        }
    }

    return st.length === 0
};
