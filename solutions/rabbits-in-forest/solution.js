// Problem: Rabbits in Forest
// LeetCode: https://leetcode.com/problems/rabbits-in-forest/
// Language: javascript
// Runtime: 2 ms
// Memory: 56.9 MB
// Submitted: 2025-12-29

var numRabbits = function (answers) {
    let map = new Map();
    for (let likeMe of answers) {
        let countInGroup = likeMe + 1
        map.set(countInGroup, (map.get(countInGroup) || 0) + 1);
    }

    let total = 0;
    for (let [countInGroup, count] of map) {
        let numOfGroups = Math.ceil(count / countInGroup)
        total += numOfGroups * countInGroup;
    }
    return total;
};

