// Maximum Average Subarray I
// solve the problem using sliding window technique

// -----------------------------------------------------------------------

/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value 
and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 
Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
*/

// -------------------------------------------------------------------------------------------------

function findMaxAverage(nums,k){

    // Initialize the sum of the first k elements
    let windowSum = 0;

    // Calculate the sum of the first k elements
    for(let i =0; i<k; i++){
        windowSum += nums[i];
    }

    // Initialize maxSum with the windowSum
    let maxSum = windowSum;

    // use sliding window technique to find the maximum sum of any contiguous subarray of length k
    for( let i = k; i <nums.length; i++){

        // remove the first element of the previous window
        windowSum = windowSum - nums[i-k];

        // add the new element to this window
        windowSum = windowSum + nums[i];

        // update maxSum if the current windowSum is greater
        if(windowSum > maxSum){
            maxSum = windowSum;
        }

    }
    return maxSum / k;
}

console.log(findMaxAverage([1,12,-5,-6,50,3],4)); // Output: 12.75
console.log(findMaxAverage([5],1)); // Output: 5.00000

// Time Complexity: O(n) where n is the length of the input array nums.
// Space Complexity: O(1) since we are using a constant amount of space.