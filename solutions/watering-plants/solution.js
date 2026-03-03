// Problem: Watering Plants
// LeetCode: https://leetcode.com/problems/watering-plants/
// Language: javascript
// Runtime: 72 ms
// Memory: 39 MB
// Submitted: 2021-11-21

/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps = 0;
    let c = capacity
    for(let i=0;i<plants.length;i++){
        if(c>=plants[i]){
        steps++
            c-=plants[i]
        }else{
            steps+=i;
            steps+=i;
            i--;
            c = capacity;
        }
    }
    return steps;
};
