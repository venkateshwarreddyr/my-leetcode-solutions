// Problem: Design Browser History
// LeetCode: https://leetcode.com/problems/design-browser-history/
// Language: javascript
// Runtime: 27 ms
// Memory: 67 MB
// Submitted: 2025-07-21

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

var BrowserHistory = function (homepage) {

    this.ptr = new ListNode(homepage)
    /** 
     * @param {string} url
     * @return {void}
     */
    BrowserHistory.prototype.visit = function (url) {
        let new_node = new ListNode(url)

        if (this.ptr === null) {
            this.ptr = new_node
            return
        }

        this.ptr.next = new_node
        new_node.prev = this.ptr

        this.ptr = this.ptr.next
    };

    /** 
     * @param {number} steps
     * @return {string}
     */
    BrowserHistory.prototype.back = function (steps) {
        while (steps && this.ptr.prev) {
            this.ptr = this.ptr.prev
            steps--
        }
        
        return this.ptr?.val ?? null
    };

    /** 
     * @param {number} steps
     * @return {string}
     */
    BrowserHistory.prototype.forward = function (steps) {
        while (steps && this.ptr.next) {
            this.ptr = this.ptr.next
            steps--
        }

        return this.ptr?.val ?? null
    };

};

