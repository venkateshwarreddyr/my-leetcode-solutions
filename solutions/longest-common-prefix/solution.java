// Problem: Longest Common Prefix
// LeetCode: https://leetcode.com/problems/longest-common-prefix/
// Language: java
// Runtime: 1 ms
// Memory: 41.3 MB
// Submitted: 2023-11-28

import java.util.HashSet;

class Solution {
    public String longestCommonPrefix(String[] strs) {
        int minLen = Integer.MAX_VALUE;

        for (String str : strs) {
            minLen = Math.min(minLen, str.length());
        }

        if (minLen == 0) {
            return "";
        }

        for (int i = 0; i < minLen; i++) {
            HashSet<Character> charSet = new HashSet<>();

            for (String str : strs) {
                charSet.add(str.charAt(i));
            }

            if (charSet.size() > 1) {
                return strs[0].substring(0, i);
            }
        }

        return strs[0].substring(0, minLen);
    }
}

