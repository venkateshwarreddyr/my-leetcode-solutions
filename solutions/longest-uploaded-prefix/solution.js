// Problem: Longest Uploaded Prefix
// LeetCode: https://leetcode.com/problems/longest-uploaded-prefix/
// Language: javascript
// Runtime: 543 ms
// Memory: 129.1 MB
// Submitted: 2023-05-18

// cl = console.log
var LUPrefix = function (n) {
    server = new Array(n + 1).fill(0);
    c = 1;
};

/** 
 * @param {number} video
 * @return {void}
 */
LUPrefix.prototype.upload = function (video) {
    server[video] = 1
};

/**
 * @return {number}
 */
LUPrefix.prototype.longest = function () {
    let n = server.length;
    while (c < (n + 1)) {
        // cl(c, server)
        if (!server[c]) {
            break;
        }

        c++;
    }

    return c-1;
};

/** 
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */
