// Problem: Car Fleet II
// LeetCode: https://leetcode.com/problems/car-fleet-ii/
// Language: javascript
// Runtime: 237 ms
// Memory: 104.8 MB
// Submitted: 2023-10-19

cl = console.log
var Stack = function () {
    let a = [];
    this.top = () => a[a.length - 1];
    this.size = () => a.length;
    this.empty = () => !a.length;
    this.push = (e) => a.push(e);
    this.pop = () => a.pop();
    this.cl = () => console.log(a);
};


var getCollisionTimes = function (a) {

    let n = a.length
    let an = new Array(n).fill(-1)

    a.sort((a, b) => a[0] - b[0])

    let stack = new Stack();
    stack.push(n - 1)

    function coltime(i, j) {
        let [ipos, ispd] = a[i]
        let [jpos, jspd] = a[j]
        return (ipos - jpos) / (jspd - ispd)
    }

    for (let i = n - 1; i > -1; i--) {
        let [pos, spd] = a[i]

        while (stack.size() && spd <= a[stack.top()][1] ||
            (stack.size() > 1 && coltime(i, stack.top()) >= an[stack.top()])
        ) {
            stack.pop()
        }

        if (stack.size()) {
            an[i] = coltime(i, stack.top())
        }
        stack.push(i)
    }

    return an
};

// [3,4],[5,4],[6,3],[9,1]
// [7,4],[9,4],[9,3],[10,1]
// [11,4],      [9,3],[10,1]
// [7,4],      [12,3],[11,1]
