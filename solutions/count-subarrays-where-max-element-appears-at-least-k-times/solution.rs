// Problem: Count Subarrays Where Max Element Appears at Least K Times
// LeetCode: https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/
// Language: rust
// Runtime: 20 ms
// Memory: 3.5 MB
// Submitted: 2023-12-14

impl Solution {
    pub fn count_subarrays(a: Vec<i32>, k: i32) -> i64 {
        let n = a.len();
        let max = *a.iter().max().unwrap();
        let mut i = 0;
        let mut maxCount = 0;
        let mut an: i64 = 0;

        for j in 0..n {
            if a[j] == max {
                maxCount+=1
            }

            while maxCount == k && i<n {
                if a[i] == max {
                    maxCount-=1
                }
                i+=1;
            }

            an+=(i as i64);
        }

        an
    }
}

/**

var countSubarrays = function(a, k) {
    let n = a.length
    let i=0,j=0
    let max = Math.max(...a)
    let maxCount = 0
    let an = 0

    while(i<n && j<n) {
            if(a[j] === max)
                maxCount++
        while(maxCount===k && i<n) {
            if(a[i] === max)
                maxCount--
            i++
        } 
         an+=(i)
        
            j++

    }

    return an
};

*/

