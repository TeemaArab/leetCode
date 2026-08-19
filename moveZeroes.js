/*
--------------------Move Zeroes -----------------------------------------
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/ 

function moveZeroes(nums){
    // i am going to use two pointers approach, one pointer called read to iterate through the array, the other pointer called write to keep track of the position where the next non-zero element should be written.
    let write = 0;
   
    // read is used for searching the useful numbers
    for(let read = 0; read < nums.length; read++){
        if(nums[read] !== 0){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            nums[write] = nums[read];
            write++;                                                                                                                                                                                                                                               
        }
    }

    // Fill the remaining positions with zeros
   while(write<nums.length){
        nums[write] = 0;
        write++;
    }
    return nums;
}

console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]