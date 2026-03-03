// Problem: Final Value of Variable After Performing Operations
// LeetCode: https://leetcode.com/problems/final-value-of-variable-after-performing-operations/
// Language: rust
// Runtime: 2 ms
// Memory: 2.1 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
        let mut an = 0;

        for op in operations.iter() {
            match op.as_str() {
                "--X" | "X--" => an -= 1,
                "++X" | "X++" => an += 1,
                _ => (),
            }
        } 

        an as i32
    }
}
