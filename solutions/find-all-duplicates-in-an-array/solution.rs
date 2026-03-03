// Problem: Find All Duplicates in an Array
// LeetCode: https://leetcode.com/problems/find-all-duplicates-in-an-array/
// Language: rust
// Runtime: 10 ms
// Memory: 2.8 MB
// Submitted: 2023-12-08

use std::collections::HashSet;

impl Solution {
    pub fn find_duplicates(a: Vec<i32>) -> Vec<i32> {
        let mut result = Vec::with_capacity(a.len());
        let mut set: HashSet<i32> = HashSet::with_capacity(a.len());

        for &num in a.iter() {
            if !set.insert(num) {
                result.push(num);
            }
        }

        result
    }
}

