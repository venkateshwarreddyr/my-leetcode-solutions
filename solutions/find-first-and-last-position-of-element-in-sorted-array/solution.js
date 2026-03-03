// Problem: Find First and Last Position of Element in Sorted Array
// LeetCode: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Language: javascript
// Runtime: 52 ms
// Memory: 50 MB
// Submitted: 2024-05-04


function lower_bound_eg(arr, target, L = 0, R = arr.length) {
  while (L < R) {
    let mid = ~~(L / 2 + R / 2);

    arr[mid] < target ? (L = mid + 1) : (R = mid);
  }

  return L;
}

function upper_bound_g(arr, target, L = 0, R = arr.length) {
  while (L < R) {
    let mid = ~~(L / 2 + R / 2);

    arr[mid] <= target ? (L = mid + 1) : (R = mid);
  }

  return L;
}


var searchRange = function(nums, target) {
	const l = lower_bound_eg(nums, target);
	const u = upper_bound_g(nums, target, l, nums.length);
	if (nums[l] === target) return [l, u - 1];
	return [-1, -1];
    };
