/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/



 

function productExceptSelf(nums) {

    let answer=[];

    for( let i = 0; i<nums.length; i++){
        let product = 1;

        for( let j= 0; j< nums.length; j++){
            if (j !== i){
                product = product * nums[j];
            }
        }
        answer.push(product);
    }
    return answer;
}
console.log(productExceptSelf([1,2,3,4]));

// the above solution has a time complexity of O(n^2) because we have a nested loop. We can optimize it to O(n) by using two arrays to store the prefix and suffix products.var productExceptSelf = function(nums) {
   
function productExceptSelf(nums) {
    let answer = [];
    let left = [];
    let right =[];

    // build the left array: left[i] = product of everything before index i
    let total = 1;
    for( let i =0; i <nums.length; i++){
        
        left[i]= total // copy total BEFORE touching nums[i]
        total = total * nums[i] // update total by multiplying it by nums[i]
    }

    // now do the same for building right array
    total = 1;
    for( let i = nums.length -1; i >=0; i--){
        right[i]= total;
        total = total * nums[i];
    }
    // now combine : answer[i] = left part * rigt part
    for( let i =0; i < nums.length; i++){
        answer[i]= left[i] * right[i]
    }
  return answer;
 
};
console.log(productExceptSelf([1,2,3,6])); // [36,18,12,6]


