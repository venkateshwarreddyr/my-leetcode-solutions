// Problem: Apply Operations to Make Sum of Array Greater Than or Equal to k
// LeetCode: https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/
// Language: javascript
// Runtime: 12 ms
// Memory: 57 MB
// Submitted: 2025-12-22

// cl = console.log
var minOperations = function (targetSum) {
    let min = Infinity

    let times = targetSum - 1
    for (let x = 1; x <= targetSum; x++) {
        let t
        for (t = 0; t <= times; t++) {
            if (x + x * t >= targetSum) {
                min = Math.min(min, x - 1 + t)
                break
            }
        }
        times = t + 1
    }

    return min === Infinity ? 0 : min
}

var minOperations22222 = function (targetSum) {
    if (targetSum === 1) return 0
    let ob = {}

    let minops_2reach_targetSum = Infinity

    function fn(sum, max, ops) {
        if (ops > minops_2reach_targetSum) return Infinity
        if (sum >= targetSum) {
            minops_2reach_targetSum =
                Math.min(minops_2reach_targetSum, ops)
            return 0
        }

        // cl({ sum, max })

        let key = sum + '-' + max
        if (key in ob) return ob[key]

        ob[key] = 1 +
            Math.min(
                fn(sum + max, max, ops + 1),
                fn(sum + 1, max + 1, ops + 1) //
            )

        return ob[key]
    }

    return fn(1, 1, 0)
};

var minOperations44444444 = function (targetSum) {
    let opsinc1 = Math.ceil(Math.sqrt(targetSum))
    let opsdups = Math.ceil(targetSum / opsinc1)
    return opsinc1 - 1 + opsdups - 1
}

var minOperations333333333 = function (targetSum) {
    let min = Infinity

    for (let s = 1; s <= targetSum; s++) {
        let opsinc1 = s - 1
        let opsdups = Math.ceil(targetSum / s) - 1
        min = Math.min(min, opsinc1 + opsdups)
    }

    return min
}


