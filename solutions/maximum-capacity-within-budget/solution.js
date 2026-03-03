// Problem: Maximum Capacity Within Budget
// LeetCode: https://leetcode.com/problems/maximum-capacity-within-budget/
// Language: javascript
// Runtime: 153 ms
// Memory: 96.6 MB
// Submitted: 2026-01-19

var maxCapacity = function (costs, capacity, budget) {
    const n = costs.length;
    let maxTotalCapacity = 0;

    const machines = costs.map((cost, i) => ({
        cost: cost,
        cap: capacity[i],
    }));
    machines.sort((a, b) => a.cost - b.cost);

    const prefixMaxCapacity = new Array(n);
    let currentMax = 0;
    for (let i = 0; i < n; i++) {
        currentMax = Math.max(currentMax, machines[i].cap);
        prefixMaxCapacity[i] = currentMax;
    }

    let L = 0;
    for (let R = n - 1; R >= 0; R--) {
        const costRight = machines[R].cost;
        const capRight = machines[R].cap;

        if (costRight < budget) {
            maxTotalCapacity = Math.max(maxTotalCapacity, capRight);
        }

        while (L < n && machines[L].cost < budget - costRight) {
            L++;
        }

        const lastValidIndex = Math.min(L - 1, R - 1);

        if (lastValidIndex >= 0) {
            const bestLeftCap = prefixMaxCapacity[lastValidIndex];
            maxTotalCapacity = Math.max(maxTotalCapacity, capRight + bestLeftCap);
        }
    }

    return maxTotalCapacity;
};

var maxCapacity222 = function (costs, capacity, budget) {
    const n = costs.length;

    // items[i] = [cost, capacity]
    const items = [];
    for (let i = 0; i < n; i++) {
        items.push([costs[i], capacity[i]]);
    }

    // Sort by cost
    items.sort((a, b) => a[0] - b[0]);

    if (items[0][0] >= budget) return 0;

    // Segment tree to store max capacity
    const segTree = new Array(4 * n).fill(0);

    function buildTree(node, left, right) {
        if (left === right) {
            segTree[node] = items[left][1];
            return;
        }
        const mid = Math.floor((left + right) / 2);
        buildTree(2 * node + 1, left, mid);
        buildTree(2 * node + 2, mid + 1, right);
        segTree[node] = Math.max(
            segTree[2 * node + 1],
            segTree[2 * node + 2]
        );
    }

    function queryMax(node, ql, qr, left, right) {
        if (right < ql || left > qr) return 0;
        if (ql <= left && right <= qr) return segTree[node];
        const mid = Math.floor((left + right) / 2);
        return Math.max(
            queryMax(2 * node + 1, ql, qr, left, mid),
            queryMax(2 * node + 2, ql, qr, mid + 1, right)
        );
    }

    buildTree(0, 0, n - 1);

    // Find last index with cost < remainingBudget
    function findLastAffordableIndex(remainingBudget, left, right) {
        let result = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (items[mid][0] < remainingBudget) {
                result = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return result;
    }

    let maxTotalCapacity = 0;

    for (let i = 0; i < n; i++) {
        const currentCost = items[i][0];
        const currentCapacity = items[i][1];

        if (currentCost >= budget) break;

        maxTotalCapacity = Math.max(maxTotalCapacity, currentCapacity);

        const remainingBudget = budget - currentCost;
        const maxIndex = findLastAffordableIndex(remainingBudget, i + 1, n - 1);

        if (maxIndex !== -1) {
            const bestSecondCapacity = queryMax(
                0,
                i + 1,
                maxIndex,
                0,
                n - 1
            );
            maxTotalCapacity = Math.max(
                maxTotalCapacity,
                currentCapacity + bestSecondCapacity
            );
        }
    }

    return maxTotalCapacity;
};

var maxCapacity33333 = function (costs, capacity, budget) {
    const n = costs.length;

    // pair and sort
    const machines = costs
        .map((c, i) => [c, capacity[i]])
        .sort((a, b) => a[0] - b[0]);

    // prefix max capacity
    const pref = new Array(n);
    let best = 0;
    for (let i = 0; i < n; i++) {
        best = Math.max(best, machines[i][1]);
        pref[i] = best;
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        const cost = machines[i][0];
        const cap = machines[i][1];
        if (cost >= budget) break;

        // take one
        ans = Math.max(ans, cap);

        // take two
        let l = 0, r = i - 1;
        const rem = budget - cost;

        while (l <= r) {
            const m = (l + r) >> 1;
            if (machines[m][0] < rem) l = m + 1;
            else r = m - 1;
        }

        if (r >= 0) {
            ans = Math.max(ans, cap + pref[r]);
        }
    }

    return ans;
};

