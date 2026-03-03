// Problem: Two Sum II - Input Array Is Sorted
// LeetCode: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Language: rust
// Runtime: 2 ms
// Memory: 2.1 MB
// Submitted: 2023-12-08

use std::cmp::Ordering;

impl Solution {
    pub fn two_sum(a: Vec<i32>, target: i32) -> Vec<i32> {
        let mut i = 0;
        let mut j = a.len() - 1;

        loop {
            match (a[i] + a[j]).cmp(&target) {
                Ordering::Less => i+=1,
                Ordering::Greater => j-=1,
                Ordering::Equal => return vec![(i+1) as i32, (j+1) as i32],
            }
        }

        vec![1, 1]
    }

}
