// Problem: Split a String in Balanced Strings
// LeetCode: https://leetcode.com/problems/split-a-string-in-balanced-strings/
// Language: rust
// Runtime: 0 ms
// Memory: 2.1 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn balanced_string_split(s: String) -> i32 {
        let mut cc = 0;
        let mut balance = 0;

        for c in s.chars() {
            balance += match c {
                'L' => 1,
                'R' => -1,
                _ => 0
            };

            if balance == 0 {
                cc+=1;
            }
        }

        cc
    }
}
