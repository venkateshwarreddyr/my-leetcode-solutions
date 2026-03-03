// Problem: Group Anagrams
// LeetCode: https://leetcode.com/problems/group-anagrams/
// Language: rust
// Runtime: 13 ms
// Memory: 5.7 MB
// Submitted: 2023-12-08

use std::collections::HashMap;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        
        let mut map = HashMap::new();

        for w in strs {
            let mut x: Vec<char> = w.chars().collect();
            x.sort();
            map.entry(x).or_insert(vec![]).push(w);
        }

        map.values().cloned().collect()
    }
}
