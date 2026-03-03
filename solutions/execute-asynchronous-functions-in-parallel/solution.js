// Problem: Execute Asynchronous Functions in Parallel
// LeetCode: https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/
// Language: javascript
// Runtime: 74 ms
// Memory: 42.3 MB
// Submitted: 2023-12-13

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        let res = new Array(functions.length);
        let resolveCount = 0
        functions.forEach(async (fun, index) => {
            try {
                res[index] = await fun()
                resolveCount++
                if (resolveCount === functions.length) {
                    resolve(res);
                }
            } catch (err) {
                reject(err);
            }
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
