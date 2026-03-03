// Problem: Most Profit Assigning Work
// LeetCode: https://leetcode.com/problems/most-profit-assigning-work/
// Language: javascript
// Runtime: 712 ms
// Memory: 58.3 MB
// Submitted: 2024-06-18

cl = console.log
/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    let a = difficulty
        .map((e, i) => ({ profit: profit[i], difficulty: e }))
        .sort((a, b) => b.profit - a.profit)
    /**
        50,10
        40,8
        30,6
        20,4
        10,2
     */
    worker.sort((a, b) => a - b)
    let an = 0
    cl(a)
    cl(worker)
    worker.forEach(e => {

        for (let { difficulty, profit } of a) {
            if (e >= difficulty) {
                an += profit;
                return;
            }
        }
        // let lo = 0, hi = a.length - 1

        // while (lo <= hi) {
        //     mid = Math.trunc(lo / 2 + hi / 2)

        //     if (a[mid].difficulty <= e) {
        //         hi = mid - 1
        //     } else {
        //         lo = mid + 1
        //     }
        // }
        // cl({ lo, hi, e }, a[lo]?.profit)
        // if (lo < a.length)
        //     an += a[lo].profit

    })

    return an;
};
