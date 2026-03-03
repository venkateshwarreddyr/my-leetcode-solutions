// Problem: Largest Values From Labels
// LeetCode: https://leetcode.com/problems/largest-values-from-labels/
// Language: javascript
// Runtime: 35 ms
// Memory: 65.3 MB
// Submitted: 2025-11-12

var largestValsFromLabels = function (values, labels, numWanted, useLimit) {
    const items = values.map((v, i) => [v, labels[i]]);
    items.sort((a, b) => b[0] - a[0]);

    const labelCount = new Map();
    let sum = 0,
        count = 0;

    for (let [val, label] of items) {
        if ((labelCount.get(label) || 0) < useLimit) {
            sum += val;
            labelCount.set(label, (labelCount.get(label) || 0) + 1);
            count++;
            if (count === numWanted) break;
        }
    }
    return sum;
};
