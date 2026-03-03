// Problem: Maximize the Confusion of an Exam
// LeetCode: https://leetcode.com/problems/maximize-the-confusion-of-an-exam/
// Language: javascript
// Runtime: 166 ms
// Memory: 50.8 MB
// Submitted: 2023-06-15

var maxConsecutiveAnswers111111 = function (a, K) {
    let n = a.length

    let maxcc = 0
    for (let i = 0; i < n; i++) {
        for (let first of ['T', 'F']) {
            let cc = 0
            let k = K
            for (let j = i; j < n; j++) {
                let e = a[j]
                if (e === first) {
                } else {
                    if (k === 0) {
                        break
                    }
                    k--
                }
                cc++
            }
            maxcc = Math.max(maxcc, cc)
        }
    }
    return maxcc
};


//  T F    F  T  T   F  T  T
//  1 0   -1  0  1   0  1  2

var maxConsecutiveAnswers = function (a, K) {
    a = a.split("").map(e => (e === 'T') ? 1 : 0)
    let n = a.length
    let p = new Array(n)

    function aaa(ans) {
        let s = 0
        let i = 0
        for (let e of a) {
            if (e !== ans) {
                s += 1
            }
            p[i] = s
            i++
        }

        let maxcc = -Infinity
        for (let i = 0, j = i; j < n; j++) {
            if ((p[j] - (p[i - 1] || 0)) <= K) {
                maxcc = Math.max(maxcc, j - i + 1)
            } else {
                i++
            }
        }
        return maxcc
    }

    return Math.max(aaa(1), aaa(0))
}

