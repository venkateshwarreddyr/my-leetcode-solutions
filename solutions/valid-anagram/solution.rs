// Problem: Valid Anagram
// LeetCode: https://leetcode.com/problems/valid-anagram/
// Language: rust
// Runtime: 3 ms
// Memory: 2.2 MB
// Submitted: 2023-12-08

use std::collections::HashMap;

impl Solution {
    pub fn is_anagram(s: String, t: String) -> bool {
        let mut map: HashMap<char, i32> = HashMap::new();

        s.chars().for_each(|c| *map.entry(c).or_insert(0) += 1);

        t.chars().for_each(|c| *map.entry(c).or_insert(0) -= 1);

        map.into_values().all(|v| v == 0)
    }
}
