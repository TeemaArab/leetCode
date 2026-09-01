// Minimum Size Subarray Sum   using sliding window technique

/*
Given an array of positive integers nums and a positive integer target,
return the minimal length of a subarray whose sum is greater than or equal to target.
 If there is no such subarray, return 0 instead.

*/

//----------------------------------------------------------
/*
Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/

function minSubArrayLength(target, nums) {

    let left = 0;
    let windowSum = 0;
    let minLength = Infinity;

    for(let right = 0; right < nums.length; right ++){
        windowSum = windowSum + nums[right];

        while( windowSum >= target){
            windowSum = windowSum - nums[left];
            let currentLength = right - left + 1;
            minLength = Math.min(minLength, currentLength);
            left++;
        }
    }
    if(minLength === Infinity){
        return 0;
    }
    return minLength;
}
console.log(minSubArrayLength(7, [2,3,1,2,4,3])); // Output: 2
console.log(minSubArrayLength(4, [1,4,4])); // Output: 1
console.log(minSubArrayLength(11, [1,1,1,1,1,1,1,1])); // Output: 0