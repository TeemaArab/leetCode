// Longest substring without repeating characters

// Given a string s, find the length of the longest substring without duplicate characters.

//  -------------------------------------------------------------
/*
Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

function lengthOfLongestSubstring(s) {
    let left = 0;
    let maxLength = 0;
    let set = new Set();

    for (let right = 0; right <s.length; right++){
    while(set.has(s[right])){
        set.delete(s[left]);
        left++;
    }
    set.add(s[right]);
    let currentLength = right - left + 1;
    
    if(currentLength > maxLength){
        maxLength = currentLength;
    }
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3

// Time Complexity: O(n) - Each character is processed at most twice (once added and once removed from the set).
// space complexity O(n) - The set can contain at most n characters in the worst case (when all characters are unique).