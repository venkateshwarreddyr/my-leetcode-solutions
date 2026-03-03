// Problem: Find Words That Can Be Formed by Characters
// LeetCode: https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
// Language: rust
// Runtime: 6 ms
// Memory: 2.4 MB
// Submitted: 2023-12-08

use std::collections::*;

impl Solution {
    pub fn count_characters(words: Vec<String>, chars: String) -> i32 {
        let mut map: HashMap<char, i32> = HashMap::new();

        for c in chars.chars() {
            let count = map.entry(c).or_insert(0);
            *count += 1;
        }

        let count: i32 = words.iter().filter(|word| {
            let mut temp_map = map.clone();
            for c in word.chars() {
                if let Some(count) = temp_map.get_mut(&c) {
                    if(*count > 0) {
                        *count -= 1;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }

            return true;
        }).map(|word| word.len() as i32).sum();

        return count;
    }
}
