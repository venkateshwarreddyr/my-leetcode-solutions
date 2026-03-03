// Problem: Number of Ways to Reorder Array to Get Same BST
// LeetCode: https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/
// Language: javascript
// Runtime: 110 ms
// Memory: 51.9 MB
// Submitted: 2023-08-15

cl = console.log
var numOfWays = function (arrangement) {
    const n = arrangement.length;

    // Calculate the factorial of n
    let totalWays = arrangement.reduce((product, _, i) => product * BigInt(i + 1), 1n);

    // Create a Union-Find data structure
    const uf = new UnionFind(n + 1); // 'n + 1' for 1 to n nodes in the tree
    const isDeleted = new Array(n).fill(false);

    // Traverse the arrangement from right to left
    for (let i = n - 1; i >= 0; i--) {
        isDeleted[arrangement[i]] = true;

        if (isDeleted[arrangement[i] - 1]) uf.union(arrangement[i] - 1, arrangement[i]);
        if (isDeleted[arrangement[i] + 1]) uf.union(arrangement[i], arrangement[i] + 1);

        // Calculate the number of permutations with the current arrangement removed
        totalWays /= BigInt(uf.getSizeOfRoot(arrangement[i]));
    }


    // Return the result modulo 1000000007
    return totalWays % BigInt(1000000007) - 1n;
};

class UnionFind {
    constructor(size) {
        // Initialize the root and size arrays for Union-Find
        this.root = new Array(size).fill().map((_, i) => i);
        this.size = new Array(size).fill(1);
    }

    // Find the root of a set using path compression
    find(x) {
        if (this.root[x] === x) return x;
        return this.root[x] = this.find(this.root[x]);
    }

    // Perform union of two sets and update sizes
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        this.root[rootX] = rootY;
        this.size[rootY] += this.size[rootX];
        return this.size[rootY];
    }

    // Get the size of the root set
    getSizeOfRoot(x) {
        return this.size[this.find(x)];
    }
}


