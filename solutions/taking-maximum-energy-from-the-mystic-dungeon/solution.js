// Problem: Taking Maximum Energy From the Mystic Dungeon
// LeetCode: https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon/
// Language: javascript
// Runtime: 134 ms
// Memory: 67 MB
// Submitted: 2024-05-12

/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function(energy, k) {
    let map = {}
    let map2 = {}
    let i = 0;
    for(let e of energy) {
        map[i%k] = map[i%k] ?? 0
        map[i%k]+=e
        i++
    }
    
        
    i = 0;
    let max = -Infinity
    for(let e of energy) {
        let x = i%k    
        map2[x] = map2[x] ?? 0
        map2[x]+=e 
        
        max = Math.max(max, map[x] - map2[x] + e)

        i++
    }
    
    return max
};
