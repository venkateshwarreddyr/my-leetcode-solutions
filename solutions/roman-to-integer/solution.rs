// Problem: Roman to Integer
// LeetCode: https://leetcode.com/problems/roman-to-integer/
// Language: rust
// Runtime: 7 ms
// Memory: 2.1 MB
// Submitted: 2023-11-28

impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let mut cc = 0;
        let mut prev_value = 0;

        for c in s.chars().rev() {
            let value = match c {
                'I' => 1,
                'V' => 5,
                'X' => 10,
                'L' => 50,
                'C' => 100,
                'D' => 500,
                'M' => 1000,
                _ => 0
            };

            if value < prev_value {
                cc -= value;
            } else {
                cc += value;
            }

            prev_value = value;
        } 
        
        cc
    }
}
