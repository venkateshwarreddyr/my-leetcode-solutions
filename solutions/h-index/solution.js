// Problem: H-Index
// LeetCode: https://leetcode.com/problems/h-index/
// Language: javascript
// Runtime: 2 ms
// Memory: 54.5 MB
// Submitted: 2026-01-02

var hIndex = function (numOfCitations) {
    const n = numOfCitations.length;
    numOfCitations = numOfCitations.sort((a, b) => b - a);

    let numOfPapers = 0;
    let hIndex = 0; //  h Papers Are AtLeast This Pc Times Cited
    for (let i = 0, numOfPapers = 1; i < n; i++, numOfPapers++) {
        if (numOfPapers <= numOfCitations[i]) {
            hIndex = numOfPapers;
        } else {
            break
        }
    }
    return hIndex;
};

