// Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

/* Example1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2


*/

function subarraySum(nums, k) {
    let count = 0;
    let prefixSum = 0;
    let map = new Map();
    map.set(0,1);

    for( let i = 0; i< nums.length; i++){
        prefixSum = prefixSum + nums[i];
        let needed = prefixSum - k;

        if( map.has(needed)){
            count = count + map.get(needed);
        }

        if(map.has(prefixSum)){
            map.set(prefixSum, map.get(prefixSum) + 1);
        }
        else{
            map.set(prefixSum, 1);
        }
    }
    return count;
}

console.log(subarraySum([1,1,1], 2)); // Output: 2
console.log(subarraySum([1,2,3,3], 3)); // Output: 3


//time complexity: O(n) where n is the length of the input array nums. We iterate through the array once, performing constant-time operations for each element.
// soace complexity: O(n) where n is the length of the input array nums. In the worst case, we may store all prefix sums in the map, which requires additional space proportional to the number of unique prefix sums encountered during the iteration.