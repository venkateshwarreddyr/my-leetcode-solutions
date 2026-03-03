// Problem: Shuffle String
// LeetCode: https://leetcode.com/problems/shuffle-string/
// Language: rust
// Runtime: 2 ms
// Memory: 2 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn restore_string(s: String, indices: Vec<i32>) -> String {
        let mut an: Vec<char> =  vec![' '; s.len()];

        for (i, index) in indices.iter().enumerate() {
            an[*index as usize] = s.as_bytes() [i] as char;
        }

        an.into_iter().collect()
    }
}
