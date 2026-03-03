// Problem: Remove Duplicates from Sorted Array
// LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Language: rust
// Runtime: 3 ms
// Memory: 2.3 MB
// Submitted: 2023-11-29

impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut j = 1;

        for i in 1..nums.len() {
            if nums[i] != nums[i -1] {
                nums[j] = nums[i];
                j+=1;
            }
        }

        j as i32
    }
}
