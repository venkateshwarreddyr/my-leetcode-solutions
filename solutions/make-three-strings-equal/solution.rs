// Problem: Make Three Strings Equal
// LeetCode: https://leetcode.com/problems/make-three-strings-equal/
// Language: rust
// Runtime: 6 ms
// Memory: 2.1 MB
// Submitted: 2023-11-24

impl Solution {
    pub fn find_minimum_operations(s1: String, s2: String, s3: String) -> i32 {

        let (n1, n2, n3) = (s1.len(), s2.len(), s3.len());

        let mut i = 0;
        let n = n1.min(n2).min(n3);

        while i < n && 
        &s1[i..=i] == &s2[i..=i] && 
        &s1[i..=i] == &s3[i..=i] {
            i += 1;
        }

        if i == 0 {
            -1
        } else {
            (n1 + n2 + n3 - (3 * i)) as i32
        }
    }
}
