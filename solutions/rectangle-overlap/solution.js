// Problem: Rectangle Overlap
// LeetCode: https://leetcode.com/problems/rectangle-overlap/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.5 MB
// Submitted: 2025-10-12

var isRectangleOverlap = function(rec1, rec2) {
    
  
  if (rec1[2] <= rec2[0] || rec2[2] <= rec1[0]) return false;
  
  if (rec1[3] <= rec2[1] || rec2[3] <= rec1[1]) return false;
  
  return true;
    
};

