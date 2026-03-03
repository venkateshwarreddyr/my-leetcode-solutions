// Problem: Water Bottles II
// LeetCode: https://leetcode.com/problems/water-bottles-ii/
// Language: javascript
// Runtime: 56 ms
// Memory: 51.1 MB
// Submitted: 2024-03-31

/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    let drank = 0
    let empty = 0
    while(numBottles>0) {
        if(numExchange>numBottles) {
        drank += numBottles
            
            numBottles=0
        } else {
        drank += numExchange
            
      
        numBottles-=numExchange
            numBottles++
            numExchange++
              }
        // console.log({numBottles, drank, numExchange})
        
    }
    
    return drank
//     let full = numBottles
//     let empty = 0
//     let drunk = 0
//     let exc = 0
//     while (full || empty>numExchange) {
//         console.log({full, empty, exc})
//         if(full) {
//             empty+=full
//             drunk+=full
//             full=0
//         } else {
//             full++
//             exc+=numExchange
//             empty-=numExchange
//         }
        
//     }
//     console.log()
//     return drunk
};
