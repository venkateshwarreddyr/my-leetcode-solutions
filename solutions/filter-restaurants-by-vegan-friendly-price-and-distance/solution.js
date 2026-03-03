// Problem: Filter Restaurants by Vegan-Friendly, Price and Distance
// LeetCode: https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/
// Language: javascript
// Runtime: 3 ms
// Memory: 61.3 MB
// Submitted: 2025-11-20

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function (restaurants, veganFriendly, maxPrice, maxDistance) {
    restaurants = restaurants.filter((restaurant) => restaurant[3] <= maxPrice)
    restaurants = restaurants.filter((restaurant) => restaurant[4] <= maxDistance)
    if (veganFriendly) {
        restaurants = restaurants.filter((restaurant) => restaurant[2])
    }

    restaurants.sort((a, b) => b[1] - a[1] || b[0] - a[0])

    return restaurants.map(e => e[0])
};
