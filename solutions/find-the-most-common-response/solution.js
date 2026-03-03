// Problem: Find the Most Common Response
// LeetCode: https://leetcode.com/problems/find-the-most-common-response/
// Language: javascript
// Runtime: 471 ms
// Memory: 195.1 MB
// Submitted: 2025-10-15

/**
 * @param {string[][]} responses
 * @return {string}
 */
function findCommonResponse(responses) {
    const freqMap = new Map();
    for (const words of responses) {
        const uniqWords = new Set();
        for (const word of words) {
            if (!uniqWords.has(word)) {
                uniqWords.add(word);
                freqMap.set(word, (freqMap.get(word) ?? 0) + 1);
            }
        }
    }
    let bestWord = responses[0][0];
    for (const [word, freq] of freqMap) {
        const bestFreq = freqMap.get(bestWord);
        if (
            freq > bestFreq || //
            (freq === bestFreq && word < bestWord)
        ) {
            bestWord = word;
        }
    }
    return bestWord;
}
