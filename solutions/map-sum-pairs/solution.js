// Problem: Map Sum Pairs
// LeetCode: https://leetcode.com/problems/map-sum-pairs/
// Language: javascript
// Runtime: 66 ms
// Memory: 42.4 MB
// Submitted: 2023-06-14

var MapSum = function () {
    ob = {}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    ob[key] = val
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let s = 0
    for (let k in ob) {
        if (k.startsWith(prefix)) {
            s += ob[k]
        }
    }

    return s;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
