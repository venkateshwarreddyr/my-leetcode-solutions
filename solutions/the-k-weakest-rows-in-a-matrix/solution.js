// Problem: The K Weakest Rows in a Matrix
// LeetCode: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
// Language: javascript
// Runtime: 77 ms
// Memory: 46.1 MB
// Submitted: 2023-09-18


var binarySearch = function(nums, target) {
    let low = 0
    let high = nums.length-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(target>=nums[mid] && (target<nums[mid-1]||mid===0)){
            return mid
        }
        else if(target < nums[mid])  low = mid+1
        else high = mid-1
    }
    return nums.length
};

var kWeakestRows = function(grid, k) {
    let ans = []
    for(let i = 0; i<grid.length; i++){
        ans.push({a: binarySearch(grid[i], 0), i});
    }
    console.log({ans})
    return ans.sort((a,b) => a.a-b.a).map(e => e.i).splice(0,k)
};
