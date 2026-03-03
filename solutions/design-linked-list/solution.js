// Problem: Design Linked List
// LeetCode: https://leetcode.com/problems/design-linked-list/
// Language: javascript
// Runtime: 140 ms
// Memory: 51.3 MB
// Submitted: 2024-01-18


function Node(val) {
    this.val = val
    this.next = null
}

var MyLinkedList = function () {
    let head = new Node()

    MyLinkedList.prototype.print = function (x) {
        let curr = head.next
        let v = ''

        while (curr.next) {
            v += (curr.val + ',')
            curr = curr.next
        }
        v += (curr.val + ',')
        console.log(x, v)
    }
    MyLinkedList.prototype.get = function (index) {
        let curr = head.next
        for (let i = 0; i < index && curr; i++) {
            curr = curr.next
        }
        return curr?.val ?? -1
    };


    MyLinkedList.prototype.addAtHead = function (val) {
        let temp = new Node(val)
        temp.next = head.next
        head.next = temp

    };


    MyLinkedList.prototype.addAtTail = function (val) {
        let curr = head
        while (curr.next) {
            curr = curr.next
        }
        curr.next = new Node(val)
    };


    MyLinkedList.prototype.addAtIndex = function (index, val) {
        let curr = head
        for (let i = 0; i < index && curr; i++) {
            curr = curr.next
        }

        if (curr) {
            let temp = new Node(val)
            temp.next = curr.next
            curr.next = temp
        }

    };


    MyLinkedList.prototype.deleteAtIndex = function (index) {
        let curr = head
        for (let i = 0; i < index && curr; i++) {
            curr = curr.next
        }
        if (curr)
            curr.next = curr.next?.next

    };


};

