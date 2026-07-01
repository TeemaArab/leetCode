/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]
*/ 


var groupAnagrams = function(strs) {
    let map = new Map();
       // iterate through the array and get the alphabetic order of each element
    for ( let i = 0; i< strs.length; i++){
        let str = strs[i];
        let key = str.split('').sort().join('');
        
        // if the key exists in the map. we push that str into map as its value
        if(map.has(key)){
             map.get(key). push(str) ;  
        }else{
            map.set(key, [str])
        }
    }
    // finally we need to make an array from the values in our map
    return Array.from(map.values());
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

// Time: For each of the n strings, sorting a string of length k takes O(k log k). So overall: O(n · k log k), where n = number of strings, k = max string length.
//Space: O(n · k) — storing all the strings across all the map's arrays.