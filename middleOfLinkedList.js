// Middle of LinkedList
// Given a non-empty, singly linked list with head node head, return a middle node of linked list.
// If there are two middle nodes, return the second middle node.

/*

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.


Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
*/

// -------------------------------------------------------------------
//create a single linked-list node

class ListNode{
    constructor(val,next =null){
        this.val = val;
        this.next = next;
    }
}

// conver an array to a linked list
function arrayToLinkedList(arr){
    let dummy = new ListNode(0);
    let current = dummy;

    for( let value of arr){
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}
// convert a linked list to an array for easy priniting
function linkedListToArray(head){
    let result =[];
    let current = head;

    while(current !== null){
        result.push(current.val);
        current = current.next;
    }

    return result;
}












//****************************************** IMPORTANT *********************************** */

//--------------------------------------------------------------------
// this is the main function to find the middle node of a linked list

function middleNode(head){

    let current = head;
    let count = 0;

    while( current !== null){
      count ++;
      current = current.next;
    }

    let middle = Math.floor(count / 2);
    current = head;

    for( let i =0; i < middle; i++){
        current = current.next;
    }

    return current;
}


// Example usage:
let head1 = arrayToLinkedList([1,2,3,4,5]);
let middle1 = middleNode(head1);
console.log(linkedListToArray(middle1)); // Output: [3,4,5]


// ----------------------------------------------------------------
// time complexity: O(n) where n is the number of nodes in the linked list
//space complexity: O(1) since we are using a constant amount of space