// Problem: Can Place Flowers
// LeetCode: https://leetcode.com/problems/can-place-flowers/
// Language: javascript
// Runtime: 92 ms
// Memory: 40.5 MB
// Submitted: 2021-05-15

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i =0;i<=flowerbed.length/2 && n > 0;i++){
        let revI = flowerbed.length -1 -i
        if(i==0){
            if(!flowerbed[i] && !flowerbed[i+1]){
                flowerbed[i] = 1;
                n--
            } 
        // }else if(i === flowerbed.length-1){
             if(!flowerbed[revI] && !flowerbed[revI-1]){
                flowerbed[revI] = 1;
                 n--
            } 
        }else if(i < flowerbed.length){
            if(!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]){
                flowerbed[i] = 1;
                 n--
            } 
            if(!flowerbed[revI] && !flowerbed[revI-1] && !flowerbed[revI+1]){
                flowerbed[revI] = 1;
                 n--
            } 
        }
    }
    if(n <= 0) return true
    return false
};

canPlaceFlowers([1,0,0,0,1], 1)

