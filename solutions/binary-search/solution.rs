// Problem: Binary Search
// LeetCode: https://leetcode.com/problems/binary-search/
// Language: rust
// Runtime: 4 ms
// Memory: 2.2 MB
// Submitted: 2023-11-30

impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        match nums.binary_search(&target) {
            Ok(i) => i as i32,
            Err(_) => -1 as i32
        }
    }
}
