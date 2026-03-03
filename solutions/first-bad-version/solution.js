// Problem: First Bad Version
// LeetCode: https://leetcode.com/problems/first-bad-version/
// Language: javascript
// Runtime: 78 ms
// Memory: 41.7 MB
// Submitted: 2022-02-12

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    found = null
    var binarySearch = function(low, high) {
        if(found===null && low<=high){
            
        let mid = Math.floor((low+high)/2)

        if(isBadVersion(mid) && !isBadVersion(mid-1)){
            found = mid
            return
        }else if(isBadVersion(mid) && isBadVersion(mid-1)){
            
        binarySearch(low, mid)
        }else{
        binarySearch(mid+1, high)
            }        }

};
    
    return function(n) {
        if(isBadVersion(1)) return 1
        binarySearch(1, n)
        return found
    };
};
