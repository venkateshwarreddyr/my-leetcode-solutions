// Problem: Minimum Operations to Make the Integer Zero
// LeetCode: https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/
// Language: javascript
// Runtime: 1 ms
// Memory: 55 MB
// Submitted: 2025-12-16

let cl = console.log
const getSetBitCount = (n) => {
    return n.toString(2).replaceAll('0', '').length
}

var makeTheIntegerZeroTTTT = function (num1, num2) {
    if (num1 === 0) return 0

    // num1 - ops * (2**0_60 + num2) = 0
    // num1 = ops * (2**0_60 + num2)
    // num1/ops = (2**0_60 + num2)
    // num1/ops - num2 = 2**0_60
    // (num1 - ops*num2)/ops = 2**0_60
    // (num1 - ops*num2) / ops = 2**0_60
    for (let ops = 1; ops <= 60; ops++) {
        let x = (num1 - ops * num2) / ops
        if (x < 0) break
        // if (x < ops) break
        cl({ num1, ops, x, sbc: getSetBitCount(x) })
        if (getSetBitCount(x) <= 1) {
            return ops
        }
    }

    return -1
}

var makeTheIntegerZero = function (num1, num2) {
    if (num1 === 0) return 0

    // num1 - ops * (2**0_60 + num2) = 0
    // num1 = ops * (2**0_60 + num2)
    // num1 = ops * 2**0_60 + ops * num2
    // num1 - ops * num2  =  ops number of some 2 ** 0_60
    for (let ops = 1; ; ops++) {
        let x = num1 - ops * num2
        if (x < ops) break
        if (x < 0) break
        if (getSetBitCount(num1 - ops * num2) <= ops) {
            return ops
        }
    }

    return -1
}

var makeTheIntegerZero333333 = function (num1, num2) {
    if (num1 === 0) return 0

    // num1 - ops * (2**0_60 + num2) = 0
    // num1 - ops * 2**0_60 - ops * num2 = 0
    // num1 - ops * num2 =  ops * 2**i_0_60
    let ops = 0
    // cl({ num1, num2, ops })
    while (num1 > 0) {
        num1 -= num2
        ops++

        if (num1 < ops) break
        // cl({ num1, num2, sbc, ops })
        // ops * 2**i_0_60 = 2**i_0_60 + 2**i_0_60 + ...
        if (getSetBitCount(num1) <= ops) {
            return ops
        }
    }
    return -1
}

var makeTheIntegerZero2222222222 = function (num1, num2) {
    let q = [num1]
    let ans = 0

    let set = new Set()
    while (q.length) {
        let nq = []

        for (let e of q) {
            if (e === 0) return ans
            for (let i = 0; i <= 60; i++) {
                let x = e - ((2 ** i) + num2)
                if (set.has(x)) continue
                set.add(x)
                if (x > num1) continue
                if (x < -num1) continue
                nq.push(x)
            }
        }
        ans++
        q = nq
    }

    return -1
};

