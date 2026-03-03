// Problem: Sender With Largest Word Count
// LeetCode: https://leetcode.com/problems/sender-with-largest-word-count/
// Language: javascript
// Runtime: 187 ms
// Memory: 63.1 MB
// Submitted: 2022-10-06

/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    let obj = {};
    let max = -1;
    let ans = null;
    messages.forEach((message, i) => {
        obj[senders[i]]= (obj[senders[i]] || 0) + (message.split(" ").length);
        if(obj[senders[i]]>max){
            max = obj[senders[i]];
            ans = senders[i];
        } else if (obj[senders[i]] === max){
            ans = [ans, senders[i]].sort()[1]
        }
    });
    return ans;
    
};
