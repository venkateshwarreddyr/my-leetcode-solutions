// Problem: Sort an Array
// LeetCode: https://leetcode.com/problems/sort-an-array/
// Language: javascript
// Runtime: 184 ms
// Memory: 76.9 MB
// Submitted: 2025-08-02


var sortArray = function (nums) {
    let n = nums.length

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    function getPivoteBeforeAndAfterIndex(s, e) {
        let mid = s + Math.floor((e - s) / 2)
        swap(mid, e)
        let pivot = nums[e]

        /**
        
        [-1,2,-8,-10]
        [-10],[2,-8,-1]
         */

        let i = s;
        for (let j = s; j < e; j++) {
            if (pivot > nums[j]) {
                swap(i, j)
                i++
            }
        }
        swap(i, e)

        let pivotBeforeIndex = i - 1
        let pivoteAfterIndex = i + 1
        while (nums[i] === nums[pivotBeforeIndex]) {
            pivotBeforeIndex--
        }
        while (nums[i] === nums[pivoteAfterIndex]) {
            pivoteAfterIndex++
        }

        return [pivotBeforeIndex, pivoteAfterIndex]
    }

    function quickSort_(s, e) {
        if (s > e) return
        let [pivotBeforeIndex, pivoteAfterIndex] = getPivoteBeforeAndAfterIndex(s, e)
        quickSort_(s, pivotBeforeIndex)
        quickSort_(pivoteAfterIndex, e)
    }

    quickSort_(0, n - 1)

    return nums
};
