// Problem: Flatten Nested List Iterator
// LeetCode: https://leetcode.com/problems/flatten-nested-list-iterator/
// Language: javascript
// Runtime: 101 ms
// Memory: 55 MB
// Submitted: 2023-10-20

cl = console.log
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

var Queue = function () {
    a = []
    Queue.prototype.push = (e) => a.push(e)
    Queue.prototype.shift = () => a.shift()
    Queue.prototype.size = () => a.length
    Queue.prototype.empty = () => !a.length
    Queue.prototype.print = () => console.log(a);

}
var NestedIterator = function (nestedList) {
    let q = new Queue();

    function fn(a) {
        let an = []
        for (let e of a.getList()) {
            if (e.isInteger()) {
                an.push(e.getInteger())
            } else {
                an.push(...fn(e))
            }
        }
        return an
    }

    for (let e of nestedList) {
        if (e.isInteger()) {
            q.push(e.getInteger())
        } else {
            fn(e).forEach(v => q.push(v))
        }
    }
    q.print()
    NestedIterator.prototype.hasNext = function () {
        return !q.empty()
    };

    NestedIterator.prototype.next = function () {
        return q.shift()
    };
};


