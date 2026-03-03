// Problem: Infinite Method Object
// LeetCode: https://leetcode.com/problems/infinite-method-object/
// Language: javascript
// Runtime: 51 ms
// Memory: 48.8 MB
// Submitted: 2024-05-01

/**
 * @return {Object}
 */
var createInfiniteObject = function() {
    let obj = {}


    return new Proxy(obj, {
        get: (_, p) => () => p
    })
};

/**
 * const obj = createInfiniteObject();
 * obj['abc123'](); // "abc123"
 */
