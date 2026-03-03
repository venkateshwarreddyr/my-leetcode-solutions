// Problem: Longest Substring Without Repeating Characters
// LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Language: rust
// Runtime: 4 ms
// Memory: 2.3 MB
// Submitted: 2023-12-08

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut window = vec![];
        let mut max = 0;

        for c in s.chars() {
            if window.contains(&c) {
                while window.remove(0) != c {

                }
            }

            window.push(c);

            if window.len() > max {
                max = window.len();
            }
        }

        return max as i32
    }
}
