// Problem: Count Items Matching a Rule
// LeetCode: https://leetcode.com/problems/count-items-matching-a-rule/
// Language: rust
// Runtime: 7 ms
// Memory: 4.2 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn count_matches(items: Vec<Vec<String>>, rule_key: String, rule_value: String) -> i32 {
        
        let keyIndex = match &rule_key[..] {
            "type" => 0,
            "color" => 1,
            "name" => 2,
            _ => {
                return 0
            }
        };

        items.iter().filter(|item| item[keyIndex] == rule_value).count() as i32
    }
}
