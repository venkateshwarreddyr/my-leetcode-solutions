// Problem: Merge Two Sorted Lists
// LeetCode: https://leetcode.com/problems/merge-two-sorted-lists/
// Language: javascript
// Runtime: 1 ms
// Memory: 58.1 MB
// Submitted: 2025-06-30


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(l1, l2) {        
    if(!l1) return l2
    if(!l2) return l1
    let newl = new ListNode(10)
    let newll = newl
    while(l1!=null&&l2!=null){
        if(l1.val<=l2.val){ 
                 newl.next = new ListNode(l1.val)
            
            l1 = l1.next
        }else{
                 newl.next = new ListNode(l2.val)
            l2=l2.next
        }
        newl = newl.next
    }
     while(l1!=null){
                 newl.next = new ListNode(l1.val)
            l1 = l1.next
        newl = newl.next
        
    }
     while(l2!=null){
                 newl.next = new ListNode(l2.val)
            l2=l2.next
        newl = newl.next
        }
    return newll.next

};
var mergeTwoLists2 = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1
    let l11 = l1
    let prev = null
    while(l1!=null&&l2!=null){
        console.log(l1.val,l2.val, l1.val>l2.val, l11, l2)
        if(l1.val>=l2.val){       
            let temp = l2
            l2= l2.next
            temp.next = l1
            if(prev!==null)
            prev.next = temp
            else{
                l11 = temp
            }
                prev = temp
        }else{
        prev = l1
        l1 = l1.next
        }
    }
    if(l2)
        prev.next = l2
    return l11
};
