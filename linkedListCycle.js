// Linked List Cycle

/*

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

*/

// -------------------------------------------------------------EXAMPLES --------------------------------------------------
// example 1
/*
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
Example 2:


Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
Example 3:


Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
 
*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// step 2: Implement the function to detect a cycle in the linked list using Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm)

function hasCycle(head){
     let  slow= head;
     let fast = head;

     while( fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }

  }
   return false;
} 



// Step C: Build a test linked list manually: 1 -> 2 -> 3 -> 4
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null; // no cycle here

console.log( hasCycle(node1)); // expect false

// Step D: Create a cycle in the linked list: 1 -> 2 -> 3 -> 4 -> 2 (cycle)
node4.next = node2; // create a cycle

console.log( hasCycle(node1)); // expect true

//time complexity is O(n) and space complexity is O(1)