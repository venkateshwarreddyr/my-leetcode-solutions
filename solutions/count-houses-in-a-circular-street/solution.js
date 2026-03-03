// Problem: Count Houses in a Circular Street
// LeetCode: https://leetcode.com/problems/count-houses-in-a-circular-street/
// Language: javascript
// Runtime: 98 ms
// Memory: 54 MB
// Submitted: 2024-04-29

/**
 * Definition for a street.
 * class Street {
 *     @param {number[]} doors
 *     constructor(doors);
 * 
 *     @return {void}
 *     openDoor();
 * 
 *     @return {void}
 *     closeDoor();
 * 
 *     @return {boolean}
 *     isDoorOpen();
 * 
 *     @return {void}
 *     moveRight();
 * 
 *     @return {void}
 *     moveLeft();
 * }
 */
/**
 * @param {Street} street
 * @param {number} k
 * @return {number}
 */
var houseCount = function(street, k) {
    let cc = 0
    let K = k
    while(k) {
        street.closeDoor()
        street.moveRight()
        k--
    }
    while(!street.isDoorOpen()) {
        street.openDoor()
         street.moveRight()
        cc++
    }
    return cc
};
