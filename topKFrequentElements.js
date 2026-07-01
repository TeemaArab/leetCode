/*

347. Top K Frequent Elements

Medium
Topics


Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2

Output: [1,2]

Example 2:

Input: nums = [1], k = 1

Output: [1]

Example 3:

Input: nums = [1,2,1,2,1,2,3,1,3,2], k = 2

Output: [1,2]
*/

function topKFrequent(nums, k) {
    // first I create a map to save key value pairs of the number and its frequency
    let map = new Map();

    // iterate through the array and get the frequency of each element
    for(let i = 0; i<nums.length; i++){
        let num = nums[i];
        //check if the nums is in the map, if it is then increment its value by 1, if not then set it to 1
        if(map.has(num)){
            map.set(num, map.get(num)+1);
        }else{
            map.set(num,1);
        }
    }

    // now it is time to check which element has the highest frequency
    let result = [];
    
    for(let i =0; i < k; i++){
        let maxCount = 0;
        let maxNum = null;

        for( let num of map.keys()){
            if(map.get(num)> maxCount){
                maxCount = map.get(num);
                maxNum = num;

            }
        }
        result.push(maxNum);
        map.delete(maxNum);
    }
    return result;
}
console.log(topKFrequent([1,1,1,2,2,3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2)); // [1,2]

// Time: O(n*k) where n is the number of elements in the array and k is the number of unique elements in the array.
// Space: O(n) where n is the number of unique elements in the array.