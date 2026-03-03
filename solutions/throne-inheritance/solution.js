// Problem: Throne Inheritance
// LeetCode: https://leetcode.com/problems/throne-inheritance/
// Language: javascript
// Runtime: 136 ms
// Memory: 111 MB
// Submitted: 2025-11-19

/**
 * @param {string} kingName
 */
var ThroneInheritance = function (kingName) {
    this.king = kingName;
    this.family = new Map();
    this.dead = new Set();
    this.family.set(kingName, []);

    ThroneInheritance.prototype.birth = function (parentName, childName) {
        if (!this.family.has(parentName)) this.family.set(parentName, []);
        this.family.get(parentName).push(childName);
    };

    ThroneInheritance.prototype.death = function (name) {
        this.dead.add(name);
    };

    ThroneInheritance.prototype.getInheritanceOrder = function () {
        const order = [];
        const dfs = name => {
            if (!this.dead.has(name)) order.push(name);
            for (const child of this.family.get(name) || []) dfs(child);
        };
        dfs(this.king);
        return order;
    };

};

