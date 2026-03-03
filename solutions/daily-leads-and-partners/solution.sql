/*
Problem: Daily Leads and Partners
LeetCode: https://leetcode.com/problems/daily-leads-and-partners/
Language: mysql
Runtime: 923 ms
Memory: 0.0B
Submitted: 2024-04-03
*/

# Write your MySQL query statement below

SELECT date_id, make_name, COUNT(DISTINCT lead_id) as unique_leads, COUNT(DISTINCT partner_id) as unique_partners from DailySales
 group by date_id, make_name;
