// Problem: Merge Triplets to Form Target Triplet
// LeetCode: https://leetcode.com/problems/merge-triplets-to-form-target-triplet/
// Language: javascript
// Runtime: 44 ms
// Memory: 89.2 MB
// Submitted: 2025-10-29

var mergeTriplets = function (triplets, [tarX, tarY, tarZ]) {
    let an = triplets
        .filter(([x, y, z]) => (x <= tarX && y <= tarY && z <= tarZ))
        .reduce(
            ([maxX, maxY, maxZ], [x, y, z]) =>
                [Math.max(maxX, x), Math.max(maxY, y), Math.max(maxZ, z)],//
            [0, 0, 0]
        )

    return an.join(',') === [tarX, tarY, tarZ].join(',')
};

