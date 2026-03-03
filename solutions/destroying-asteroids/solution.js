// Problem: Destroying Asteroids
// LeetCode: https://leetcode.com/problems/destroying-asteroids/
// Language: javascript
// Runtime: 188 ms
// Memory: 58 MB
// Submitted: 2022-01-02

/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    asteroids = asteroids.sort((a,b) => a-b);
    for(let e of asteroids){
        if(e<=mass){
           mass+=e
        }else{
            return false
        }
    }
    return true
};
