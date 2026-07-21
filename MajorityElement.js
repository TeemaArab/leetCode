/*

Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
The input is generated such that a majority element will exist in the array.


*/ 

var majorityElement = function(nums) {
    let map = new Map();

    for ( let i =0; i<nums.length; i++){
        let num = nums[i];
        if(map.has(num)){
            map.set(num, (map.get(num) || 0)+ 1);
        }else{
             map.set(num, 1);
        }
       
    }
    let maxCount = 0;
    let maxNum = null;
    for(let [num,count] of map){
        if(count > maxCount){
            maxCount = count;
            maxNum = num;
        }
    }
    return maxNum;
};

console.log(majorityElement([3,2,3])) // 3
console.log(majorityElement([2,2,1,1,1,2,2])) // 2

//time complexity O(n) - we are iterating through the array once and then iterating through the map once
//space complexity O(n) - we are storing the counts of each number in a map