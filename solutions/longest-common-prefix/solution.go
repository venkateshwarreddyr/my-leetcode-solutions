// Problem: Longest Common Prefix
// LeetCode: https://leetcode.com/problems/longest-common-prefix/
// Language: golang
// Runtime: 0 ms
// Memory: 2.4 MB
// Submitted: 2023-11-29

package main

import (
	"fmt"
)

func longestCommonPrefix(strs []string) string {
	minLen := len(strs[0])

	for _, s := range strs {
		if len(s) < minLen {
			minLen = len(s)
		}
	}

	if minLen == 0 {
		return ""
	}

	for i := 0; i < minLen; i++ {
		charSet := make(map[byte]bool)

		for _, str := range strs {
			charSet[str[i]] = true
		}

		if len(charSet) > 1 {
			return strs[0][:i]
		}
	}

	return strs[0][:minLen]
}

