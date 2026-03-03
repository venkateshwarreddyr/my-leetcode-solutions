// Problem: Merge Similar Items
// LeetCode: https://leetcode.com/problems/merge-similar-items/
// Language: rust
// Runtime: 6 ms
// Memory: 2.2 MB
// Submitted: 2023-12-06

use std::collections::BTreeMap;

impl Solution {
    pub fn merge_similar_items(items1: Vec<Vec<i32>>, items2: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut an: Vec<Vec<i32>> = [].to_vec();

        let mut map: BTreeMap<i32, i32> = BTreeMap::new();

        for item in items1.iter() {
            map.insert(item[0], item[1]);
        }

        for item in items2.iter() {
            match map.get_mut(&item[0]) {
                Some(val) =>  *val += item[1],
                None =>  { 
                    map.insert(item[0], item[1]);
                }
            };
        }

        for (key, value) in map.iter() {
            an.push(vec![key.clone(), *value]);
        }

        an.sort_by_key(|v| v[0]);

        an
    }
}
