// Delete node in a linked list
/*
There is a singly-linked list head and we want to delete a node node in it.

You are given the node to be deleted node. You will not be given access to the first node of head.

All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.

Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:

The value of the given node should not exist in the linked list.
The number of nodes in the linked list should decrease by one.
All the values before node should be in the same order.
All the values after node should be in the same order.

EXAMPLE:
Input: head = [4,5,1,9], node = 5
Output: [4,1,9]
Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.


*/

// define the node structure for the linked list
class ListNode{
    constructor(val, next = null){
        this.val = val;
        this.next = next;
    }
}

//part2 " create the nodes"
const node1 = new ListNode(4);
const node2 = new ListNode(5);
const node3 = new ListNode(1);
const node4 = new ListNode(9);

// connect the nodes to form the linked list: 4 -> 5 -> 1 -> 9
node1.next = node2;
node2.next = node3;
node3.next = node4;

// define the head and he node to delete
let head = node1;
let nodeToDelete = node2; // node with value 5

///--------------------------------------------------------------------------------------

//Part3: Delete the given node
// this is the main section from leetcode to delete the node in the linked list
function deleteNode(node){
     node.val = node.next.val; // Copy the value of the next node to the current node
     node.next = node.next.next; // Bypass the next node, effectively deleting it
}
///--------------------------------------------------------------------------------------


//part4: to see the linked list in the form of an array for prinitng
function linkedListToArray(head) {
    let result =[];
    let current = head;

    while(current !==null){
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// run the solution
deleteNode(nodeToDelete);

// print the linked list after deletion
console.log(linkedListToArray(head)); // Output: [4, 1, 9]


///----------------------------------------------------------
// time complexity: O(1) - The deletion operation is done in constant time since we are only modifying the current node and its next pointer.
// space complexity: O(1) - The space used is constant as we are not using any additional data structures that grow with the input size.
