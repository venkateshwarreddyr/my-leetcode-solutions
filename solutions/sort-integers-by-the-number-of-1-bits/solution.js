// Problem: Sort Integers by The Number of 1 Bits
// LeetCode: https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/
// Language: javascript
// Runtime: 100 ms
// Memory: 41.5 MB
// Submitted: 2021-09-06

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    countBits = (i) => {
        let count =0;
        while(i!=0){
            count+=(i&1)
            i = i>>1
        }
        return count
    }
    obj = {}
    return arr.sort((a,b) => {
        if(!obj[a]) obj[a] = countBits(a);
        if(!obj[b]) obj[b] = countBits(b);
        return obj[a]-obj[b] || a-b
    })

};
            
var sortByBits1 = function(arr) {

    return arr
        .map(i => {
        let obj = {i}
        let count =0;
        while(i!=0){
            count+=(i&1)
            i = i>>1
        }
        obj.count = count;
        return obj
    })
        .sort((a,b) => a.count-b.count || a.i-b.i)
        .map(e => e.i )

};
