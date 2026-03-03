// Problem: Capitalize the Title
// LeetCode: https://leetcode.com/problems/capitalize-the-title/
// Language: javascript
// Runtime: 100 ms
// Memory: 39.6 MB
// Submitted: 2022-01-08

/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title = title.toLowerCase().split(' ')
    for(let i = 0;i<title.length;i++){
        if(title[i].length>2){
            title[i] = (title[i][0].toUpperCase() + title[i].split('').splice(1).join(''))
        }
    }
    return title.join(' ')
};
