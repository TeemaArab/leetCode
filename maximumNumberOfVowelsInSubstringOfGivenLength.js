// Maximum Number of Vowels in a Substring of Given Length

/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.
 

*/

function maxVowels(s, k) {

    let currentVowelCount = 0;
    let maxVowelCount = 0;
    let vowels = 'aeiouAEIOU';

    // we create a loop to iterate through the first window
    for(let i=0; i<k; i++){
        if(vowels.includes(s[i])){
            currentVowelCount++;
        }
    }
    maxVowelCount = currentVowelCount;

    // we create a loop to iterate through the rest of the string
   for(let right = k; right < s.length; right++){
    if(vowels.includes(s[right])){
        currentVowelCount++;
    }
    let leavingChar = s[right -k];
    if(vowels.includes(leavingChar)){
        currentVowelCount--;
    }
    maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
   }
    return maxVowelCount;
}

console.log(maxVowels("abciiidef", 3)); // Output: 3
console.log(maxVowels("aeiou", 2)); // Output: 2

// Time Complexity: O(n), where n is the length of the string s. We iterate through the string once to count vowels in each substring of length k.
// Space Complexity: O(1), as we are using a constant amount of extra space for variables and the vowels string.