// Problem: Water and Jug Problem
// LeetCode: https://leetcode.com/problems/water-and-jug-problem/
// Language: javascript
// Runtime: 1 ms
// Memory: 53.9 MB
// Submitted: 2025-08-30

function canMeasureWater(Capacity1, Capacity2, target) {
  if (target === 0) return true;
  if (Capacity1 + Capacity2 < target) return false;

  let seen = new Set(); // seen current sizes of 1 and 2

  const dfs = (currentSize1, currentSize2) => {
    const key = currentSize1 + ',' + currentSize2;
    if (seen.has(key)) return false;
    seen.add(key);

    if (currentSize1 === target) return true;
    if (currentSize2 === target) return true;
    if (currentSize1 + currentSize2 === target) return true;

    const remaining1 = Capacity1 - currentSize1;
    const remaining2 = Capacity2 - currentSize2;

    let possbleToPourIn1From2 = Math.min(currentSize1, remaining2);
    let possbleToPourIn2From1 = Math.min(remaining1, currentSize2);

    return (
      dfs(0, currentSize2) ||
      dfs(Capacity1, currentSize2) ||
      dfs(currentSize1, 0) ||
      dfs(currentSize1, Capacity2) ||
      dfs(currentSize1 - possbleToPourIn1From2, currentSize2 + possbleToPourIn1From2) ||
      dfs(currentSize1 + possbleToPourIn2From1, currentSize2 - possbleToPourIn2From1)
    );
  };

  return dfs(0, 0);
}

