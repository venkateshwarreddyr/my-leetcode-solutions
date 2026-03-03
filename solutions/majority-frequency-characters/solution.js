// Problem: Majority Frequency Characters
// LeetCode: https://leetcode.com/problems/majority-frequency-characters/
// Language: javascript
// Runtime: 19 ms
// Memory: 60 MB
// Submitted: 2025-10-12

/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function (s) {
    let chFreqMap = {};
    for (let ch of s) {
        chFreqMap[ch] = chFreqMap[ch] || 0;
        chFreqMap[ch]++;
    }

    let maxFreq = 0;
    let freqStrMap = { [maxFreq]: '' };

    for (let ch in chFreqMap) {
        const f = +chFreqMap[ch];
        freqStrMap[f] = (freqStrMap[f] || '') + ch;

        let curFreqStrLen = freqStrMap[f].length;
        let maxFreqStrLen = freqStrMap[maxFreq].length;
        if (
            curFreqStrLen > maxFreqStrLen || //
            (curFreqStrLen === maxFreqStrLen && f > maxFreq)
        ) {
            maxFreq = f;
        }
    }

    return freqStrMap[maxFreq];
};
