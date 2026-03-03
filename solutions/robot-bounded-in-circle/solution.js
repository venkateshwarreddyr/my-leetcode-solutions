// Problem: Robot Bounded In Circle
// LeetCode: https://leetcode.com/problems/robot-bounded-in-circle/
// Language: javascript
// Runtime: 72 ms
// Memory: 42.3 MB
// Submitted: 2023-01-17

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let axis = [0,0];
    let currentFace = "N"
    let arr = ["N","W","S","E"];
    let face = {
        "N": [1, 1],
        "S": [1, -1],
        "E": [0, 1],
        "W": [0, -1]
    }

        for(let instruction of instructions){
        switch (instruction){
            case "G":
                 axis[face[currentFace][0]] = axis[face[currentFace][0]]+face[currentFace][1];
                break;
            case "L":
                 currentFace = arr[(arr.indexOf(currentFace)+4+1)%4]
                break;
            case "R":
                 currentFace = arr[(arr.indexOf(currentFace)+4-1)%4]
                break;
            default:
                break;  
    }
        }

    return (JSON.stringify(axis) === "[0,0]" || currentFace !== "N")
};
