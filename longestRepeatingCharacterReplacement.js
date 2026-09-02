// Longest Repeating Character Replacement

/*
You are given a string s and an integer k.
 You can choose any character of the string and change it to any other uppercase English character. 
You can perform this operation at most k times.
Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.
*/


// -------------------------------------------------------------------------

function characterReplacement(s, k) {
    let left = 0;
    let map = new Map(); // to keep the frequency of characters
    let maxFreq = 0; // to keep track of the maximum frequency of a single character in the current window
    let maxLength = 0; // to keep track of the maximum length of the substring found so far


    //to iterate through the string with a sliding window approach by right pointer
    for(let right = 0; right < s.length; right ++){
        let rightChar = s[right];
        if( map.has(rightChar)){
            map.set(rightChar, map.get(rightChar) + 1);
        }else{
            map.set(rightChar, 1);
        }
       
        maxFreq = Math.max(maxFreq, map.get(rightChar));

         let currentLength= right - left + 1;
         let neededChange = currentLength - maxFreq;

         while(neededChange > k){
            let leftChar = s[left];

            map.set(leftChar, map.get(leftChar) - 1);
            left ++;
            if(map.get(leftChar) === 0){
                map.delete(leftChar);
            }
            maxFreq = Math.max(maxFreq, map.get(leftChar));
            currentLength= right - left + 1;
            neededChange = currentLength - maxFreq;
         }

         maxLength = Math.max(maxLength, currentLength);

    }

    return maxLength;
}

console.log(characterReplacement("ABAB", 2)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4

// Time Complexity: O(n) - We traverse the string once with the right pointer, and the left pointer only moves forward, so the overall time complexity is linear.
// Space Complexity: O(1) - The space used by the map is constant since there are only 26 uppercase English letters, so the space complexity is O(1).
