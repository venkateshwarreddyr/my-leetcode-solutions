// Problem: Longest Common Prefix
// LeetCode: https://leetcode.com/problems/longest-common-prefix/
// Language: rust
// Runtime: 2 ms
// Memory: 2.2 MB
// Submitted: 2023-11-28

use std::cmp;
use std::collections::HashSet;

impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        let min_len = strs.iter().map(|s| s.len()).fold(std::usize::MAX, |a, c| cmp::min(a, c));

        if min_len == 0 {
            return "".to_string();
        }

        for i in 0..min_len {
            let mut hash_set = HashSet::new();

            for str in &strs {
                hash_set.insert(str.chars().nth(i));
            }

            if hash_set.len() > 1 {
                return strs[0][0..i].to_string();
            }
        }

        return strs[0][..min_len].to_string();
    }
}
