/*
Problem: Recyclable and Low Fat Products
LeetCode: https://leetcode.com/problems/recyclable-and-low-fat-products/
Language: postgresql
Runtime: 408 ms
Memory: 0.0B
Submitted: 2023-12-13
*/

-- Write your PostgreSQL query statement below
select product_id from Products where low_fats = 'Y' and recyclable = 'Y';

