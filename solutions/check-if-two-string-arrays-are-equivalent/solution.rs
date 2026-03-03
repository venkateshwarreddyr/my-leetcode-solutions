// Problem: Check If Two String Arrays are Equivalent
// LeetCode: https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
// Language: rust
// Runtime: 0 ms
// Memory: 2.3 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn array_strings_are_equal(word1: Vec<String>, word2: Vec<String>) -> bool {
        word1.concat() == word2.concat()
    }
}
