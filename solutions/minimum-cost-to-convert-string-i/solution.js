// Problem: Minimum Cost to Convert String I
// LeetCode: https://leetcode.com/problems/minimum-cost-to-convert-string-i/
// Language: javascript
// Runtime: 23 ms
// Memory: 65.1 MB
// Submitted: 2026-01-29

/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
    let n = 26;
    let minCostPath = Array.from({ length: n }, () => new Array(n).fill(Infinity));
    let charCodeAta = 'a'.charCodeAt(0);

    for(let i=0;i<original.length;i++) {
        let from = original[i].charCodeAt(0) - charCodeAta
        let to = changed[i].charCodeAt(0) - charCodeAta
        minCostPath[from][to] = Math.min(minCostPath[from][to], cost[i])
        minCostPath[from][from] = 0
        minCostPath[to][to] = 0
    }

    for(let middle = 0; middle<n;middle++) {
       for(let from = 0; from<n;from++) {
            if(minCostPath[from][middle] === Infinity) continue
        for(let to = 0; to<n;to++) {
            if(from === to || minCostPath[middle][to] === Infinity) continue
            minCostPath[from][to] = Math.min(minCostPath[from][to], minCostPath[from][middle] + minCostPath[middle][to])
        }
    }
    }
    
     let an = 0

        for(let i = 0;i<source.length;i++) {
            let from = source.charCodeAt(i) - charCodeAta
            let to = target.charCodeAt(i) - charCodeAta
            if(minCostPath[from][to] === Infinity) return -1
            an+=minCostPath[from][to]
        }
        return an

};

