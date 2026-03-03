// Problem: Next Greater Element I
// LeetCode: https://leetcode.com/problems/next-greater-element-i/
// Language: javascript
// Runtime: 73 ms
// Memory: 43.9 MB
// Submitted: 2023-05-12

var nextGreaterElement = function(nums1, nums2) {
  const map = {};
  const stack = [];
  nums2.forEach(n => {
    while (stack.length > 0 && stack[stack.length - 1] < n) {
      map[stack.pop()] = n;
    }
    stack.push(n);
  });
  return nums1.map(n => map[n] || -1);
};

var nextGreaterElement1 = function(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;

    let an = new Array(n).fill(-1);

    for(let i = 0; i<n; i++){
        let indI = nums2.indexOf(nums1[i])
        if(indI>-1){
            while(indI!==m){
                indI++
                if(nums2[indI]>nums1[i]) {
                    an[i] = nums2[indI];
                    break;
                }
            }
        }
    }

    return an;
};
