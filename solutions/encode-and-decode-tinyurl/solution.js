// Problem: Encode and Decode TinyURL
// LeetCode: https://leetcode.com/problems/encode-and-decode-tinyurl/
// Language: javascript
// Runtime: 86 ms
// Memory: 44.9 MB
// Submitted: 2023-06-16

let map = {}
cl = console.log
var encode = function (longUrl) {
    let key = "http://tinyurl.com/" + Object.keys(map).length
    map[key] = longUrl
    return key
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
    return map[shortUrl]
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
