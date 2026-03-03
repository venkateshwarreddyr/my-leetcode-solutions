// Problem: Robot Collisions
// LeetCode: https://leetcode.com/problems/robot-collisions/
// Language: javascript
// Runtime: 317 ms
// Memory: 83.2 MB
// Submitted: 2024-07-13

cl = console.log
var Stack = function () {
    let a = [];
    this.a = a
    this.top = () => a[a.length - 1];
    this.size = () => a.length;
    this.empty = () => !a.length;
    this.push = (e) => a.push(e);
    this.pop = () => a.pop();
    this.cl = () => console.log(a);
};

var survivedRobotsHealths = function (positions, healths, directions) {
    if (!directions.includes("L")) {
        return healths
    }
    if (!directions.includes("R")) {
        return healths
    }
    let a = []
    let n = positions.length
    for (let i = 0; i < n; i++) {
        a.push({
            id: i + 1,
            pos: positions[i],
            dir: directions[i],
            health: healths[i]
        })
    }

    a.sort((a, b) => a.pos - b.pos)

    let stack = new Stack();
    OUTER:
    for (let curr of a) {

        if (stack.size()) {
            let x = stack.top()
            while (x.dir === "R" && curr.dir === "L") {
                if (x.health === curr.health) {
                    stack.pop()
                    continue OUTER
                } else if (x.health > curr.health) {
                    stack.top().health--
                    continue OUTER
                }
                stack.pop()
                curr.health--
                x = stack.top()
                if (!x) break
            }
        }
        stack.push(curr)
    }
    return stack.a.sort((a, b) => a.id - b.id).map(e => e.health)

};
