// Problem: Calculator with Method Chaining
// LeetCode: https://leetcode.com/problems/calculator-with-method-chaining/
// Language: javascript
// Runtime: 56 ms
// Memory: 41.4 MB
// Submitted: 2023-12-13

class Calculator {
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.an = value
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.an += value
        return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.an -= value
         return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.an *= value
         return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0) throw new Error("Division by zero is not allowed")
        this.an /= value
         return this
    }

    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.an = this.an ** value
         return this
    }

    /** 
     * @return {number}
     */
    getResult() {
        return this.an
    }
}
