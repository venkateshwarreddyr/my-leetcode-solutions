// Problem: Compact Object
// LeetCode: https://leetcode.com/problems/compact-object/
// Language: javascript
// Runtime: 77 ms
// Memory: 50.5 MB
// Submitted: 2023-12-13

/**
 * @param {Object} obj
 * @return {Object}
 */
var compactObject = function (obj) {
    if (Array.isArray(obj)) {
        obj = obj.filter(e => e)
        for (let i = 0; i < obj.length; i++) {
            obj[i] = compactObject(obj[i])
        }
        return obj
    } else if (typeof {} === typeof obj) {
        for (let key in obj) {
            if (obj[key]) {
                obj[key] = compactObject(obj[key])
            } else {
                delete obj[key]
            }
        }

        return obj
    }

    return obj
};
