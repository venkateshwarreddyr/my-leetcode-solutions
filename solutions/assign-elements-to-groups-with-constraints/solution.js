// Problem: Assign Elements to Groups with Constraints
// LeetCode: https://leetcode.com/problems/assign-elements-to-groups-with-constraints/
// Language: javascript
// Runtime: 67 ms
// Memory: 89.6 MB
// Submitted: 2026-01-10


var assignElements33 = function (groups, elements) {
    let eleMap = new Map()
    let n = elements.length
    for (let i = 0; i < n; i++) {
        if (eleMap.has(elements[i])) continue

        eleMap.set(elements[i], i)
    }
    let memo = {}
    function getFactorsOptimized(num) {
        if (memo[num]) return memo[num]
        const factors = new Set(); // Use a Set to automatically handle duplicates

        for (let i = 1; i * i <= num; i++) {
            if (num % i === 0) {
                factors.add(i);
                if (i * i !== num) {
                    factors.add(num / i);
                }
            }
        }

        return memo[num] = Array.from(factors).sort((a, b) => a - b);
    }

    return groups.map(group => {
        let factors = getFactorsOptimized(group)
        let min = Infinity
        for (let factor of factors) {
            min = Math.min(eleMap.get(factor) ?? Infinity, min)
        }

        return min === Infinity ? -1 : min
    })
};


function assignElements(groups, elements) {
    const max = Math.max(...groups);
    const indexes = Array(max + 1).fill(-1);
 
    for (let i = 0; i < elements.length; i++) {
        const e = elements[i];
        if (e > max || indexes[e] !== -1) {
            continue;
        }
 
        for (let y = e; y <= max; y += e) {
            if (indexes[y] === -1) {
                indexes[y] = i;
            }
        }
    }
    console.log(indexes)
    return groups.map(e => indexes[e]);
}
 
const assignElements22 = (groups, elements) => {
    const maxGroupValue = Math.max(...groups);
 
    const indexOfElement = Array(maxGroupValue + 1).fill(-1);
 
    for (let elementIndex = 0; elementIndex < elements.length; elementIndex++) {
        const elementValue = elements[elementIndex];
 
        if (elementValue > maxGroupValue || indexOfElement[elementValue] !== -1) {
            continue;
        }
 
        for (
            let multiple = elementValue;
            multiple <= maxGroupValue;
            multiple += elementValue
        ) {
            if (indexOfElement[multiple] === -1) {
                indexOfElement[multiple] = elementIndex;
            }
        }
    }
 
    return groups.map(groupValue => indexOfElement[groupValue]);
};
 
