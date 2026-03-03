// Problem: Find Indices With Index and Value Difference II
// LeetCode: https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/
// Language: golang
// Runtime: 140 ms
// Memory: 10.8 MB
// Submitted: 2023-10-15

import (
    "math"
)
func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func abs(a int) int {
    if a > 0 {
        return a
    }
    return -a
}
func findIndices(a []int, indexDifference int, valueDifference int) []int {
    n := len(a)
    sufmax := make([]int, n)
    sufmin := make([]int, n)
    max2 := math.MinInt
    min2 := math.MaxInt
    ans := make([]int, 2)
    for i:=0; i<n; i++ {
        max2 = max(max2, a[n-1-i])
        sufmax[n-1-i] = max2
        min2 = min(min2, a[n-1-i])
        sufmin[n-1-i] = min2
    }

    for i:=0; i+indexDifference<n; i++ {
        if abs(a[i] - sufmax[i+indexDifference]) >= valueDifference || abs(a[i] - sufmin[i+indexDifference]) >= valueDifference {
            for j:=i+indexDifference; j<n; j++ {
                if abs(a[i] - a[j]) >= valueDifference {
                    ans[0] = i
                    ans[1] = j
                    return ans
                }
            }
        }
    }
    ans[0] = -1
    ans[1] = -1
    return ans
}
