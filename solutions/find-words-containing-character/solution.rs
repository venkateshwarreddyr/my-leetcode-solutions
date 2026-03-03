// Problem: Find Words Containing Character
// LeetCode: https://leetcode.com/problems/find-words-containing-character/
// Language: rust
// Runtime: 5 ms
// Memory: 2.3 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn find_words_containing(words: Vec<String>, x: char) -> Vec<i32> {
        words.iter().enumerate().fold(vec![], |mut a, (i, c)| {

            if c.contains(x) {
                a.push(i as i32);
            };

            a
        })
    }
}

/**


.fold(vec![], |a, c, i| {
            match c {
                true => a.push(i),
                false => {}
            };

            a
        }).collect()



*/
