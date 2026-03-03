# Problem: Continuous Subarray Sum
# LeetCode: https://leetcode.com/problems/continuous-subarray-sum/
# Language: python
# Runtime: 917 ms
# Memory: 33.3 MB
# Submitted: 2023-05-09

class Solution(object):
    def checkSubarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """
        dict = { 0: -1 }
        sum = 0
        for i, e in enumerate(nums):
            sum+=e
            v = sum%k
            if v not in dict:
                dict[v] = i
            elif i-dict[v] > 1:
                return True
        
        return False
        
