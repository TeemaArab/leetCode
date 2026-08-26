// 3Sum closest

/*
Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

 

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
Example 2:

Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).
 
---------------------------------------------------------------------------------------------------------

how to write a pseudocode for this problem:


    Sort nums in ascending order

    Set closestSum to the sum of the first three numbers

    FOR each index i from 0 to nums.length - 3:

        Set left to i + 1
        Set right to nums.length - 1

        WHILE left is smaller than right:

            Calculate the sum of nums[i], nums[left], and nums[right]

            Calculate the distance between sum and target

            Calculate the distance between closestSum and target

            IF the current sum is closer to target:
                Update closestSum with the current sum

            IF sum is exactly equal to target:
                Return sum

            IF sum is smaller than target:
                Move left one position to the right

            ELSE:
                Move right one position to the left

    Return closestSum

*/

function threeSumClosest(nums,target){
  nums.sort((a,b) => a-b);
  let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closestSum with the sum of the first three elements

  for(let i=0; i<nums.length-2; i++){// choose the first element of the triplet
    let left = i +1;
    let right = nums.length -1;

    while(left<right){
        let currentSum = nums[i] + nums[left] + nums[right];

        // the distance of currentsum from target
        let currentDistance = Math.abs(currentSum - target);
        // the distance of closestSum from target
        let closestDistance = Math.abs(closestSum - target);

        if(currentDistance < closestDistance){
            closestSum = currentSum; // update closestSum if currentSum is closer to target
        }

        if(currentSum ===target){
            return currentSum; // if currentSum is equal to target, return it
        }
        if(currentSum < target){
            left++; // move left pointer to the right to increase the sum


        } 
           // If the sum is greater than the target,
        // move right to the left to decrease the sum.
        else {
            right--; 
        }
    }
  }
  return closestSum;
}
console.log(threeSumClosest([-1,2,1,-4],1)); // 2

// Time complexity: O(n^2) - The outer loop runs n times, and the inner while loop runs at most n times in total for each iteration of the outer loop. Therefore, the overall time complexity is O(n^2).
// Space complexity: O(1) - The algorithm uses a constant amount of extra space, regardless of the input size.

// this problem was solved by using two pointers