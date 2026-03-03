// Problem: Car Fleet
// LeetCode: https://leetcode.com/problems/car-fleet/
// Language: javascript
// Runtime: 188 ms
// Memory: 71.5 MB
// Submitted: 2023-10-18

cl = console.log
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let a = []
    let n = position.length
    position.forEach((e, i) => {
        a.push([e, speed[i]])
    })

    a.sort((a, b) => a[0] - b[0])
    let stack = []
    for (let i = n - 1; i > -1; i--) {
        let [pos, spd] = a[i]
        stack.push((target-pos)/spd)

        if(stack.length > 1 && stack[stack.length-2]>=stack[stack.length-1]){
            stack.pop()
        }
    }

    return stack.length
};

