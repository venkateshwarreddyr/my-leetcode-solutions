// Problem: Count Complete Subarrays in an Array
// LeetCode: https://leetcode.com/problems/count-complete-subarrays-in-an-array/
// Language: javascript
// Runtime: 958 ms
// Memory: 161.9 MB
// Submitted: 2023-07-31

var countCompleteSubarrays = function (a) {
    let n = a.length
    let set = new Set(a)

    let cc = 0
    for (let i = 0; i < n; i++) {
        let nset = new Set()
        for (let j = i; j < n; j++) {
            nset.add(a[j])
            if (nset.size === set.size) {
                cc += n - j
                break
            }
        }
    }

    return cc;
};

var countCompleteSubarrays = function (a) {
    /*
            L0	L1		L2	RL			R		R		R
        -1
        ''	a	aa		aab	aabc		aabcc	aabccc	aaabccc
            a1
                a2
                        a2	a2
                        b1	b1
                            c1
    */

    let n = a.length
    let set = new Set(a)

    function aa(L, R) {
        let gcc = 0
        for (let [e, cc] of pm[R]) {
            if ((cc - (pm[L].get(e) || 0)) > 0) {
                // good
                gcc++
            }
        }
        return gcc
    }

    let pm = Array.from({ length: n })
    pm[-1] = new Map()
    for (let i = 0; i < n; i++) {
        pm[i] = new Map(pm[i - 1])
        let e = a[i]
        pm[i].set(e, (pm[i].get(e) || 0) + 1)
    }

    let cc = 0
    for (let L = 0, R = 0; R < n; R++) {
        while ((L <= R)) {
            let r = aa(L - 1, R)
            if ((r === set.size)) {
                cc += n - R
                L++
            } else {
                break
            }
        }
    }
    return cc
}

