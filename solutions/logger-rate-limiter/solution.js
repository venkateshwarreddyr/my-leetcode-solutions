// Problem: Logger Rate Limiter
// LeetCode: https://leetcode.com/problems/logger-rate-limiter/
// Language: javascript
// Runtime: 128 ms
// Memory: 64.6 MB
// Submitted: 2024-04-28


var Logger = function() {
    this.ob_time = {}
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if(this.ob_time[message] === undefined || timestamp >= this.ob_time[message]) {
        this.ob_time[message] = timestamp + 10

        return true
    } 
    
    return false

};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
