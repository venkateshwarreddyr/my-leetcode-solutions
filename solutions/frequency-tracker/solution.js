// Problem: Frequency Tracker
// LeetCode: https://leetcode.com/problems/frequency-tracker/
// Language: javascript
// Runtime: 627 ms
// Memory: 129.2 MB
// Submitted: 2023-05-07


var FrequencyTracker = function() {
    obj = {}
    freq = {}
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
    if(obj[number]){    
        
    freq[obj[number]].delete(number)
        obj[number]++
    } else {
        obj[number] = 1;
    }
    if(freq[obj[number]])
        freq[obj[number]].add(number)
    else {
            freq[obj[number]]= new Set();
            freq[obj[number]].add(number);
        }
};

/** 
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
    if(obj[number]) {
        
        freq[obj[number]].delete(number)
        if(obj[number]===1){
            delete obj[number]
        } else {
            obj[number]--
        }
        if(freq[obj[number]])
        freq[obj[number]].add(number)
    else {
            freq[obj[number]]= new Set();
            freq[obj[number]].add(number);
        }
            
    }
};

/** 
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
    return freq[frequency] ?  !!freq[frequency].size : false
};

/** 
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */
