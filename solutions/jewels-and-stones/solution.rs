// Problem: Jewels and Stones
// LeetCode: https://leetcode.com/problems/jewels-and-stones/
// Language: rust
// Runtime: 0 ms
// Memory: 2.1 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn num_jewels_in_stones(jewels: String, stones: String) -> i32 {
        
        stones.chars().filter(|&x| jewels.contains(x)).count() as i32
    }
}
