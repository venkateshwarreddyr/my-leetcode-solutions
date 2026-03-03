// Problem: Goal Parser Interpretation
// LeetCode: https://leetcode.com/problems/goal-parser-interpretation/
// Language: rust
// Runtime: 0 ms
// Memory: 2 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn interpret(command: String) -> String {
        command.replace("()", "o").replace("(al)", "al")
    }
}
