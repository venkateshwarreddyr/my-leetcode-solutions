// Problem: Report Spam Message
// LeetCode: https://leetcode.com/problems/report-spam-message/
// Language: javascript
// Runtime: 315 ms
// Memory: 112.7 MB
// Submitted: 2024-09-22

/**
 * @param {string[]} message
 * @param {string[]} bannedWords
 * @return {boolean}
 */
var reportSpam = function(message, bannedWords) {
    let set = new Set()
    bannedWords.forEach(word => set.add(word))
    return message.filter(word => set.has(word)).length>=2
};
