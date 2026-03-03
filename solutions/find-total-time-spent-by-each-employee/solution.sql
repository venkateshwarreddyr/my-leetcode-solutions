/*
Problem: Find Total Time Spent by Each Employee
LeetCode: https://leetcode.com/problems/find-total-time-spent-by-each-employee/
Language: mysql
Runtime: 1531 ms
Memory: 0.0B
Submitted: 2024-04-03
*/

# Write your MySQL query statement below

select event_day as day, emp_id, SUM(out_time - in_time) as total_time from Employees
group by event_day, emp_id
