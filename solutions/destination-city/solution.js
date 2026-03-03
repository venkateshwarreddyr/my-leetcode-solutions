// Problem: Destination City
// LeetCode: https://leetcode.com/problems/destination-city/
// Language: javascript
// Runtime: 72 ms
// Memory: 41.1 MB
// Submitted: 2021-07-16

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let stack = [];
    stack.push(paths[0][1]);
    let path;
    while(stack.length!=0){
        path = stack.pop();
        for(let i = 0;i<paths.length;i++){
            if(paths[i][0] === path ){
                stack.push(paths[i][1])
            }
    }
    }
    return path;
   
};

 // const matrixDFS = (ch) => {
 //        for(let i = 0;i<paths.length;i++){
 //            if(paths[i][0] === ch ){
 //                matrixDFS(paths[i][1])
 //            }
 //        }
 //    }
