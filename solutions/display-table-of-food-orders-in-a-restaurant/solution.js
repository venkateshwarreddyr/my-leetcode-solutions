// Problem: Display Table of Food Orders in a Restaurant
// LeetCode: https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/
// Language: javascript
// Runtime: 159 ms
// Memory: 67 MB
// Submitted: 2023-07-20

cl = console.log
/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    let ob = {}
    let ct = 1
    let set = {}

    let an = []
    let first = []
    for (let order of orders) {
        let [customerName, tableNumber, foodItem] = order;
        if (first.includes(foodItem)) {
        } else {
            first.push(foodItem)
        }
        ob[tableNumber] = ob[tableNumber] || {}
        ob[tableNumber][foodItem] = ob[tableNumber][foodItem] || 0
        ob[tableNumber][foodItem]++
    }
    first.sort()
    first.forEach((e, i) => {
        set[e] = i + 1
    })
    first.unshift("Table");

    for (let tableNumber in ob) {
        let ar = new Array(first.length).fill("0")
        ar[0] = tableNumber
        for (let foodItem in ob[tableNumber]) {
            ar[set[foodItem]] = ob[tableNumber][foodItem].toString()
        }
        an.push(ar)
    }

    return [first, ...an]
};
