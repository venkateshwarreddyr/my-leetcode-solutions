// Problem: Reach a Number
// LeetCode: https://leetcode.com/problems/reach-a-number/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.3 MB
// Submitted: 2026-01-14



var reachNumber22 = function (target) {
    target = Math.abs(target)
    let step = 0
    // console.log({ target, step })
    while (target > 0) {
        step += 1
        target -= step
        // console.log({ target, step })
    }

    if (target % 2 === 0) return step
    return step + 1 + (step % 2)
};

var reachNumber = function (target) {
    target = Math.abs(target);
    let sum = 0, steps = 0;
        // console.log({ sum, steps })

    while (sum < target) {
        steps++;
        sum += steps;
        // console.log({ sum, steps })
    }

    if ((sum - target) % 2 !== 0) {
        steps++;
        sum += steps;
        // console.log({ sum, steps })
    }

    if ((sum - target) % 2 !== 0) {
        steps++;
        sum += steps;
        // console.log({ sum, steps })
    }
    return steps;
};
