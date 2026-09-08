// remove linked list elements

/*
Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val, and return the new head.
*/

// -------------------------------------------------------------EXAMPLES --------------------------------------------------
// Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeElements(head,val){

    let dummy = new ListNode(0); // Create a dummy node to handle edge cases
    dummy.next = head;
    let current = dummy;

    while(current.next !== null){
        if(current.next.val  === val){
            current.next = current.next.next; // Skip the node with the target value
        } else {
            current = current.next;
        }
    }

    return dummy.next;
}



//create the linked list: 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6
const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(6);
const node4 = new ListNode(3);
const node5 = new ListNode(4);
const node6 = new ListNode(5);
const node7 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

// to see in the form of an array
function linkedListToArray(head) {
    let result = [];
    let current = head;

    while(current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}
let newHead = removeElements(node1, 6);
console.log(linkedListToArray(newHead)); // Output: [1, 2, 3, 4, 5]


