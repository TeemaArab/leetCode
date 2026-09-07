// Convert a binary number in a linked list to an integer.

/*
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.

*/

// -------------------------------------------------------------EXAMPLES --------------------------------------------------
// example 1
/*
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10


Example 2:

Input: head = [0]
Output: 0
*/

//-------------------------------------------------------------SOLUTION --------------------------------------------------
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function getDecimalValue(head) {
    let current = head;
    let result  = 0;
    while(current !== null){
        result = result * 2 + current.val;
        current = current.next;
    }
    return result;
}

// Step C: Build a test linked list manually: 1 -> 0 -> 1
const node1 = new ListNode(1);
const node2 = new ListNode(0);
const node3 = new ListNode(1);


node1.next = node2;
node2.next = node3;


// Step D: Test the function
console.log(getDecimalValue(node1)); 


// -------------------------------------------
//time complexity: O(n) where n is the number of nodes in the linked list. We traverse the linked list once to compute the decimal value.
//space complexity: O(1) since we are using a constant amount of space for variables regardless of the input size.