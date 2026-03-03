// Problem: Average of Levels in Binary Tree
// LeetCode: https://leetcode.com/problems/average-of-levels-in-binary-tree/
// Language: javascript
// Runtime: 93 ms
// Memory: 50.6 MB
// Submitted: 2023-05-12

var averageOfLevels = function(root) {
    
    let q = [[root, 0]];
    let an = [];

    while(q.length){
        let [e, l] = q.shift();
        if(e){
                if (an[l]){
                an[l][0]+=e.val
                an[l][1]++
            } else {
                an[l] = [e.val, 1]
            }
            q.push([e.left, l+1]);
            q.push([e.right, l+1]);
        }
    }

    return an.map(e => e[0]/e[1])
};
