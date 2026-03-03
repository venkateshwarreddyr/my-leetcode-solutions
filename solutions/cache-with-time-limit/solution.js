// Problem: Cache With Time Limit
// LeetCode: https://leetcode.com/problems/cache-with-time-limit/
// Language: javascript
// Runtime: 60 ms
// Memory: 42.2 MB
// Submitted: 2023-07-25

var TimeLimitedCache = function () {
    let ob = {}
    let timer = {}
    TimeLimitedCache.prototype.set = function (key, value, duration) {
        let keyExists = !!ob[key]
        if (keyExists) {
            clearTimeout(timer[key])
        }
        ob[key] = value
        timer[key] = setTimeout(() => delete ob[key], duration)
        return keyExists
    };

    TimeLimitedCache.prototype.get = function (key) {
        return ob[key] === undefined ? -1 : ob[key]
    };

    TimeLimitedCache.prototype.count = function () {
        return Object.keys(ob).length
    };
};



/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */
