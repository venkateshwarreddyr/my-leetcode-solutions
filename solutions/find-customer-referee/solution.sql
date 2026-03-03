/*
Problem: Find Customer Referee
LeetCode: https://leetcode.com/problems/find-customer-referee/
Language: postgresql
Runtime: 400 ms
Memory: 0.0B
Submitted: 2023-12-13
*/

-- Write your PostgreSQL query statement below
select name from Customer where (referee_id <> 2 or referee_id is null);

