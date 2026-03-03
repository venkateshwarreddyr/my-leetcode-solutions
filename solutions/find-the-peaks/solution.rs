// Problem: Find the Peaks
// LeetCode: https://leetcode.com/problems/find-the-peaks/
// Language: rust
// Runtime: 2 ms
// Memory: 2.2 MB
// Submitted: 2023-12-03

impl Solution {
    pub fn find_peaks(a: Vec<i32>) -> Vec<i32> {
        let n = a.len();
        let mut an: Vec<i32> = Vec::with_capacity(n);

        for i in 1..n-1 {
                if a[i] > a[i-1] && a[i] > a[i+1] {
                    an.push(i as i32);
                }
            }
        an
    }
}
