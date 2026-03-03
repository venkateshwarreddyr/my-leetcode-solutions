/*
Problem: Number of Unique Subjects Taught by Each Teacher
LeetCode: https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/
Language: mysql
Runtime: 1041 ms
Memory: 0.0B
Submitted: 2024-04-03
*/

# Write your MySQL query statement below

select teacher_id, COUNT(DISTINCT subject_id) AS cnt from Teacher group by teacher_id
