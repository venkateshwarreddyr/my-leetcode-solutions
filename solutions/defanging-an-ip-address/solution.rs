// Problem: Defanging an IP Address
// LeetCode: https://leetcode.com/problems/defanging-an-ip-address/
// Language: rust
// Runtime: 0 ms
// Memory: 2.2 MB
// Submitted: 2023-12-09

impl Solution {
    pub fn defang_i_paddr(address: String) -> String {
        address.replace(".", "[.]")
    }
}
