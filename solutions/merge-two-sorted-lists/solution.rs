// Problem: Merge Two Sorted Lists
// LeetCode: https://leetcode.com/problems/merge-two-sorted-lists/
// Language: rust
// Runtime: 0 ms
// Memory: 2.3 MB
// Submitted: 2023-11-29

// Definition for singly-linked list.
// #[derive(PartialEq, Eq, Clone, Debug)]
// pub struct ListNode {
//   pub val: i32,
//   pub next: Option<Box<ListNode>>
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
    pub fn merge_two_lists(list1: Option<Box<ListNode>>, list2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        match (list1, list2){
            (None, None) => None,
            (Some(l1), None) => Some(l1),
            (None, Some(l2)) => Some(l2),
            (Some(l1), Some(l2)) => match l1.val > l2.val {
                true =>  {
                    Some(Box::new(
                        ListNode {
                            val: l2.val,
                            next: Self::merge_two_lists(Some(l1), l2.next),
                        }
                    ))
                },
                false => {
                     Some(Box::new(
                        ListNode {
                            val: l1.val,
                            next: Self::merge_two_lists(l1.next, Some(l2)),
                        }
                    ))
                }
            },
        }
    }
}
