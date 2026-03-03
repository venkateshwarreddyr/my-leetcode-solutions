// Problem: Form Smallest Number From Two Digit Arrays
// LeetCode: https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/
// Language: javascript
// Runtime: 87 ms
// Memory: 46.2 MB
// Submitted: 2023-04-01

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  // nums1 = nums1.sort((a,b)=> a-b);
  // nums2 = nums2.sort((a,b)=> a-b);

  let arr = [];

  for (let num1 of nums1) {
    for (let num2 of nums2) {
      if (num1 === num2) {
        arr.push(num1);
      } else if (num1 < num2) {
        arr.push(num1 + "" + num2);
      } else {
        arr.push(num2 + "" + num1);
      }
    }
  }

  arr = arr.sort((a, b) => a - b);
    console.log({arr})
  return arr[0];
};

