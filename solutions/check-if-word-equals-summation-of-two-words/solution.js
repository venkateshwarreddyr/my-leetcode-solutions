// Problem: Check if Word Equals Summation of Two Words
// LeetCode: https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/
// Language: javascript
// Runtime: 84 ms
// Memory: 39 MB
// Submitted: 2021-05-30

/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    // let firstNUmber = "";
    // let secondNumber = "";
    // let thirdNumber = "";
    let getWordToNUmber = (word) => {
        let numb = "";
        for(let i = 0;i<word.length; i++){
            // console.log(word.charCodeAt(i), word[i], word.charCodeAt(i)-97)
            numb+=(word.charCodeAt(i)-97)
        }
        return numb;
    }
    console.log(getWordToNUmber(firstWord), getWordToNUmber(secondWord), getWordToNUmber(targetWord))
    return Number(getWordToNUmber(firstWord)) + Number(getWordToNUmber(secondWord)) == Number(getWordToNUmber(targetWord))
};
