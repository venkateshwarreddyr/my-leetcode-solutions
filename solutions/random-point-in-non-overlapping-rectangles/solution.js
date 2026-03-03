// Problem: Random Point in Non-overlapping Rectangles
// LeetCode: https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/
// Language: javascript
// Runtime: 32 ms
// Memory: 75 MB
// Submitted: 2026-01-14

class Solution {
    constructor(rects) {
        this.rects = rects;
        this.totalPoints = 0;
        this.weights = [];
 
        for (let rect of rects) {
            const width = rect[2] - rect[0] + 1;
            const height = rect[3] - rect[1] + 1;
            const points = width * height;
            this.weights.push(points);
            this.totalPoints += points;
        }

    }
 
    pick() {

        let target = Math.floor(Math.random() * this.totalPoints);
        let chosenRectIndex = -1;
 
        for (let i = 0; i < this.weights.length; i++) {
            if (target < this.weights[i]) {
                chosenRectIndex = i;
                break;
            }
            target -= this.weights[i];

        }
 
        const rect = this.rects[chosenRectIndex];
        const width = rect[2] - rect[0] + 1;
        const height = rect[3] - rect[1] + 1;
        const randomX = rect[0] + Math.floor(Math.random() * width);
        const randomY = rect[1] + Math.floor(Math.random() * height);
 
        return [randomX, randomY];

    }

};
