// Problem: Find the Number of Distinct Colors Among the Balls
// LeetCode: https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/
// Language: javascript
// Runtime: 386 ms
// Memory: 94.5 MB
// Submitted: 2024-05-26

var queryResults = function(limit, queries) {
    let ob = {};
    let colors = new Map();
    return queries.map(([ball, color]) => {
        if(ob[ball] === undefined) {
            colors.set(color, (colors.get(color) || 0) + 1); 
        } else {
            let prevColor = ob[ball];
            let count = colors.get(prevColor);
            if (count === 1) {
                colors.delete(prevColor);
            } else {
                colors.set(prevColor, count - 1);
            }
            colors.set(color, (colors.get(color) || 0) + 1); 
        }
        ob[ball] = color;
        
        return colors.size;
    });
};

