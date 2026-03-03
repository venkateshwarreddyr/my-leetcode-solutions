// Problem: Valid Parentheses
// LeetCode: https://leetcode.com/problems/valid-parentheses/
// Language: rust
// Runtime: 1 ms
// Memory: 2.1 MB
// Submitted: 2023-11-29

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = Vec::new();

        for c in s.chars() {
            match c {
                '(' | '{' | '[' => stack.push(c),
                _ => {
                    match stack.pop() {
                        Some('(') if c == ')' => (),
                        Some('[') if c == ']' => (),
                        Some('{') if c == '}' => (),
                        _ => return false,
                    }
                },
            };
        }

        stack.is_empty()
    }
}
