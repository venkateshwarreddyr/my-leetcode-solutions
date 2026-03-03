// Problem: Smallest Missing Genetic Value in Each Subtree
// LeetCode: https://leetcode.com/problems/smallest-missing-genetic-value-in-each-subtree/
// Language: javascript
// Runtime: 489 ms
// Memory: 153.2 MB
// Submitted: 2023-08-15

// Define a class for Union-Find data structure
class UnionFind {
    constructor(size) {
        // Initialize the parent array to represent disjoint sets
        this.parent = Array.from({ length: size }, (_, i) => i);
        // Initialize the size array to keep track of component sizes
        this.size = new Array(size).fill(1);
    }

    // Build the union-find structure using given edges
    build(edges) {
        for (let [u, v] of edges) {
            this.union(u, v);
        }
    }

    // Perform union operation on two elements
    union(u, v) {
        u = this.find(u);
        v = this.find(v);

        if (u === v) return 0;

        if (this.size[u] < this.size[v]) {
            [u, v] = [v, u];
        } else if (this.size[u] === this.size[v] && u < v) {
            [u, v] = [v, u];
        }

        // Merge the smaller component into the larger one
        this.parent[u] = v;
        this.size[v] += this.size[u];

        return 1;
    }

    // Find the parent of an element (representing a set)
    find(u) {
        if (u !== this.parent[u]) {
            // Path compression optimization
            this.parent[u] = this.find(this.parent[u]);
        }
        return this.parent[u];
    }

    // Get the size of the component to which an element belongs
    findSize(u) {
        return this.size[this.find(u)];
    }

    // Get the maximum size among all components
    getMaxSize() {
        return Math.max(...this.size);
    }

    // Print the parent and size arrays for debugging
    print() {
        console.log(this.parent);
        console.log(this.size);
    }

    // Create a deep copy of the current UnionFind instance
    clone() {
        let ret = new UnionFind();
        ret.parent = [...this.parent];
        ret.size = [...this.size];
        return ret;
    }

    // Get the size of the component to which an element belongs
    sizeOfRoot(x) {
        return this.size[this.find(x)];
    }

    // Get the count of distinct components
    getRootCount() {
        let rootCount = 0;
        for (let i = 0; i < this.parent.length; i++) {
            if (this.find(i) === i) {
                rootCount++;
            }
        }
        return rootCount;
    }
}

// Function to find the smallest missing value in subtrees
var smallestMissingValueSubtree = function (parents, nums) {
    let n = nums.length;
    let answer = new Array(n);
    let maxNum = Math.max(...nums) + 1;
    let graph = Array.from({ length: n }, () => []);

    // Create a graph based on parent-child relationships
    for (let u = 1; u < n; u++) {
        graph[parents[u]].push(u);
    }

    let uf = new UnionFind(maxNum);

    // Recursive DFS to calculate the smallest missing value in each subtree
    function dfs(node) {
        let maxMissing = 1;

        for (let child of graph[node]) {
            dfs(child);
            uf.union(nums[node], nums[child]);
            maxMissing = Math.max(answer[child], maxMissing);
        }

        // Find the smallest missing value for the current node's subtree
        while (uf.find(nums[node]) === uf.find(maxMissing)) {
            maxMissing++;
        }

        answer[node] = maxMissing;
    }

    // Start DFS from the root node
    dfs(0);

    return answer;
};

