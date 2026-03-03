// Problem: Maximum Number of Words Found in Sentences
// LeetCode: https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
// Language: rust
// Runtime: 1 ms
// Memory: 2.3 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn most_words_found(sentences: Vec<String>) -> i32 {
        sentences.iter().map(|sentence| sentence.split_whitespace().count()).max().unwrap() as i32
    }
}
