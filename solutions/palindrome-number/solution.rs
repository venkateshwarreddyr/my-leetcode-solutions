// Problem: Palindrome Number
// LeetCode: https://leetcode.com/problems/palindrome-number/
// Language: rust
// Runtime: 0 ms
// Memory: 2 MB
// Submitted: 2023-11-28

impl Solution {
    pub fn reverse(mut x: i32) -> i32 {
        let mut num: i32 = 0;

        while x != 0 {
            let d: i32 = x % 10;
            x = x / 10;
            match num.checked_mul(10).and_then(|val| val.checked_add(d)) {
                Some(val) => num = val,
                None => return 0
            }
        }

        num
    }

    pub fn is_palindrome(x: i32) -> bool {
        
        if x == 0 {
            true
        } else if x > 0 {
            x == Solution::reverse(x)
        } else {
            false
        }
    }
}
