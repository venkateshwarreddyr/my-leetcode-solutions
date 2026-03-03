// Problem: Two Sum
// LeetCode: https://leetcode.com/problems/two-sum/
// Language: rust
// Runtime: 1 ms
// Memory: 2.4 MB
// Submitted: 2023-11-28

use std::collections::HashMap;

impl Solution {
    pub fn two_sum(a: Vec<i32>, target: i32) -> Vec<i32> {
        let mut hash_map = HashMap::with_capacity(a.len());


        for (i, e) in a.iter().enumerate() {
            match hash_map.get(e) {
                Some(&v) => {
                    return vec![i as i32, v as i32];
                },
                None => {
                    hash_map.insert(target - e, i);
                },
            }
        }

        unreachable!();
    }
}
