// Problem: Matrix Similarity After Cyclic Shifts
// LeetCode: https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/
// Language: rust
// Runtime: 5 ms
// Memory: 2.1 MB
// Submitted: 2023-11-30

impl Solution {
    pub fn are_similar(mat: Vec<Vec<i32>>, k: i32) -> bool {
        let k = k as usize;

        for a in mat {
            let n = a.len();

            for i in 0..n {
                if a[i] != a[(i + k) % n] {
                    return false;
                } 
            }
        }

        return true;
    }
}
