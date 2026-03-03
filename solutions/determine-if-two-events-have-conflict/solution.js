// Problem: Determine if Two Events Have Conflict
// LeetCode: https://leetcode.com/problems/determine-if-two-events-have-conflict/
// Language: javascript
// Runtime: 127 ms
// Memory: 45 MB
// Submitted: 2022-10-23

/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
    let arr = new Array(24*60).fill(0);
    let [hours1, minutes1] = event1[0].split(":").map(e => Number(e));
    let [hours12, minutes12] = event1[1].split(":").map(e => Number(e));
    let [hours2, minutes2] = event2[0].split(":").map(e => Number(e));
    let [hours22, minutes22] = event2[1].split(":").map(e => Number(e));
    
    for(let i = hours1*60+minutes1; i<=hours12*60+minutes12;i++){
        arr[i]++
    }
    for(let i = hours2*60+minutes2; i<=hours22*60+minutes22;i++){
        arr[i]++
    }
    
    if(arr.includes(2)) return true
    return false;
};
