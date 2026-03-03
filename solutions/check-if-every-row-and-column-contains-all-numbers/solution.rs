// Problem: Check if Every Row and Column Contains All Numbers
// LeetCode: https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/
// Language: rust
// Runtime: 19 ms
// Memory: 2.1 MB
// Submitted: 2023-11-29

use std::collections::HashSet;

impl Solution {
    pub fn check_valid(matrix: Vec<Vec<i32>>) -> bool {
        let n = matrix.len();
        let sum = (n * (n + 1) / 2) as i32;

        for i in 0..n {
            let mut row_set = HashSet::with_capacity(n);
            let mut row_sum = 0;

            let mut col_set = HashSet::with_capacity(n);
            let mut col_sum = 0;

            for j in 0..n {
                row_set.insert(matrix[i][j]);
                row_sum+=matrix[i][j];

                col_set.insert(matrix[j][i]);
                col_sum+=matrix[j][i];
            }

            if row_set.len() != n || col_set.len() != n || row_sum != sum || col_sum != sum {
                return false;
            }
        }

        true
    }
}
