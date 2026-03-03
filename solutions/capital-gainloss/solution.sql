/*
Problem: Capital Gain/Loss
LeetCode: https://leetcode.com/problems/capital-gainloss/
Language: mysql
Runtime: 1268 ms
Memory: 0.0B
Submitted: 2024-04-03
*/

# Write your MySQL query statement below


select stock_name, SUM(if(operation = "Buy", -price, price)) as capital_gain_loss
from Stocks group by stock_name;
