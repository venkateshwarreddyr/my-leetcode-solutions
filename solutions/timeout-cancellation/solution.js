// Problem: Timeout Cancellation
// LeetCode: https://leetcode.com/problems/timeout-cancellation/
// Language: javascript
// Runtime: 57 ms
// Memory: 41.9 MB
// Submitted: 2023-12-13

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {

    const cancelFn = (() => {
        clearTimeout(timer);
    })

    let timer = setTimeout(function cancelFn() {
        fn(...args)
    }, t)

    return cancelFn;
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *     console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
