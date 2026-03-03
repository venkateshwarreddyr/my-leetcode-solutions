// Problem: Remove Linked List Elements
// LeetCode: https://leetcode.com/problems/remove-linked-list-elements/
// Language: rust
// Runtime: 4 ms
// Memory: 2.8 MB
// Submitted: 2023-12-10

// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>,
// }
// 
// impl ListNode {
//   #[inline]
//   fn new(val: i32) -> Self {
//     ListNode {
//       next: None,
//       val
//     }
//   }
// }

impl Solution {
    pub fn remove_elements(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
        let mut dummy = ListNode { val: 0, next: head };
        let mut current = &mut dummy;

        while let Some(mut inner) = current.next.take() {
            if inner.val == val {
                current.next = inner.next.take();
            } else {
                current.next = Some(inner);
                current = current.next.as_mut().unwrap();
            }
        }

        dummy.next.take()
    }
}

