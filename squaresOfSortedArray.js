/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 
Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 
*/


// ------------------------------- logic with two pointers -----------------------------------------
// Find the largest square → put it at the end
// Find the next largest   → put it before the previous one
// Continue moving backward


/*
create a result array with the same length as nums

set left to the first index
set right to the last index
set position to the last index of the result array

while left is less than or equal to right:

    calculate the square of the left number
    calculate the square of the right number

    if the left square is larger:
        put the left square at result[position]
        move left one step to the right

    otherwise:
        put the right square at result[position]
        move right one step to the left

    move position one step to the left

return result
*/

var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length -1;

   // create a new array of nums length
   let result = new Array(nums.length);

   let position = nums.length -1;

   while(left <= right){
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

     if(leftSquare > rightSquare){
        result[position] = leftSquare;
        left ++;

     }else{
        result[position]= rightSquare;
        right --;
     }
        position --;
    }
   return result;

};

console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])) // [4,9,9,49,121]

//time complexity O(n) - we are iterating through the array once
//space complexity O(n) - we are creating a new array of the same length as nums