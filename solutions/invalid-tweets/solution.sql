/*
Problem: Invalid Tweets
LeetCode: https://leetcode.com/problems/invalid-tweets/
Language: mysql
Runtime: 1206 ms
Memory: 0.0B
Submitted: 2024-04-03
*/

# Write your MySQL query statement below

select tweet_id from Tweets where length(content) > 15
