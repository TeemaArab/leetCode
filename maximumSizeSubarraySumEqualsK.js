// Maximum Size Subarray Sum Equals k
// Given an array nums and a target value k, find the maximum length of a subarray that sums to k.
//  If there isn't one, return 0 instead.

function maxSubArrayLen(nums, k) {
    let maxLength= 0;
    let prefixSum = 0;
    let map = new Map();
    map.set(0, -1); // Initialize the map with prefix sum 0 at index -1


    for( let i =0; i<nums.length; i++){
        prefixSum = prefixSum + nums[i];
        let needed = prefixSum - k;

        if(map.has(needed)){
            let previousIndex = map.get(needed);
            let length = i - previousIndex;
            maxLength = Math.max(maxLength, length);
        }

        // Only set the prefix sum in the map if it hasn't been seen before
        if(!map.has(prefixSum)){
            map.set(prefixSum, i);
        }
    }
    return maxLength;
}

console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3)); // Output: 4



/*

prefixSum را بساز
        ↓
needed = prefixSum - k
        ↓
needed داشتم؟ → length را حساب کن → maxLength
        ↓
prefixSum را قبلاً نداشتم؟ → prefixSum → i را ذخیره کن

*/

//time complexity: O(n) - We traverse the array once, and each operation inside the loop is O(1).
//space complexity: O(n) - In the worst case, we may store all prefix sums in the map.