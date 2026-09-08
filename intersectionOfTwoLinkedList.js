// Intersection of Two Linked Lists

/*
Given the heads of two singly linked-lists headA and headB, 
return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.

*/

// -------------------------------------------------------------EXAMPLES --------------------------------------------------
// example 1

/*
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
*/

 //solution 1: using two pointers
function getIntersectionNode(headA, headB) {


    if (!headA || !headB) return null;  // If either list is empty, there can be no intersection.
    //start one pointer at the beginnig of each list
    let currentA = headA;
    let currentB = headB;

    //continue traversing until the two pointers meet or both reach the end (null)
    while (currentA !== currentB) {

        //move pointerA forward, if it reaches the end of listA, redirect it to the head of listB
         if(pointerA === null){
            pointerA = headB;
        }else{
            pointerA = pointerA.next;
        }

        //move pointerB forward, if it reaches the end of listB, redirect it to the head of listA
        if(pointerB === null){
            pointerB = headA;
        }else{
            pointerB = pointerB.next;
        }

         }
       // Both pointers now reference the intersection node,
       // or both are null if there is no intersection. Return either pointer.
    
    return currentA;
}