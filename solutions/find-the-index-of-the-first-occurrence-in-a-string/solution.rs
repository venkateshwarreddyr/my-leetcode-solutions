// Problem: Find the Index of the First Occurrence in a String
// LeetCode: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
// Language: rust
// Runtime: 0 ms
// Memory: 2.2 MB
// Submitted: 2023-11-29

impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        match haystack.find(&needle) {
            Some(index) => index as i32,
            None => -1,
        }
    }
}
