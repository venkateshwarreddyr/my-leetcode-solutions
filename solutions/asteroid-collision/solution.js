// Problem: Asteroid Collision
// LeetCode: https://leetcode.com/problems/asteroid-collision/
// Language: javascript
// Runtime: 58 ms
// Memory: 43.8 MB
// Submitted: 2024-01-17


var asteroidCollision = function (a) {
    let stack = [];
    stack.top = () => stack[stack.length - 1];
    stack.size = () => stack.length;
    stack.empty = () => !stack.length;

    OUTER:
    for (let e of a) {
        stack.push(e)
        while (stack.length > 1) {
            let top1 = stack.pop()
            let top2 = stack.pop()
            if (top1 > 0 && top2 > 0) {
                stack.push(top2)
                stack.push(top1)
                continue OUTER;
            } else if (top1 < 0 && top2 < 0) {
                stack.push(top2)
                stack.push(top1)
                continue OUTER;
            }  else if (top1 > 0 && top2 < 0) {
                stack.push(top2)
                stack.push(top1)
                continue OUTER;
            } else if (Math.abs(top1) === Math.abs(top2)) {
                continue OUTER;
            } else if (Math.abs(top1) > Math.abs(top2)) {
                stack.push(top1)
            } else if (Math.abs(top1) < Math.abs(top2)) {
                stack.push(top2)
            } else {
                stack.push(top2)
                stack.push(top1)
            }
        }

    }

    return stack
}



















var asteroidCollision1 = function (a) {


    for (let e of a) {
        let top = stack.top()
        if (!top) {
            stack.push(e)
            continue
        }

        if (e > 0) {
            if (top < 0) {
                if (Math.abs(top) === e) {
                    stack.pop()
                } else {
                    while (Math.abs(top) < e) {
                        stack.pop()
                        stack.push(e)
                        top = stack.top()
                    }
                }
            } else {
                stack.push(e)
            }
        } else {
            if (top > 0) {
                if (top === Math.abs(e)) {
                    stack.pop()
                } else {
                    while (top < Math.abs(e)) {
                        stack.pop()
                        stack.push(e)
                        top = stack.top()
                    }
                }
            } else {
                stack.push(e)
            }
        }
    }

    return stack
};
