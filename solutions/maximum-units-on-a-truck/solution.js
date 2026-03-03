// Problem: Maximum Units on a Truck
// LeetCode: https://leetcode.com/problems/maximum-units-on-a-truck/
// Language: javascript
// Runtime: 75 ms
// Memory: 45.5 MB
// Submitted: 2023-05-11

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1] - a[1])
    
    let an = 0;
    
    for(let [num, units] of boxTypes){
        if(truckSize>num){
            truckSize-=num
            an+=(num * units)
        } else {
            an+=(truckSize * units)
            break;
        }
        
    }
    
    return an;
    
};
