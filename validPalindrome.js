/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

var isPalindrome = function(s) {
    let left = 0;
    let right = s.length -1;


    while(left < right){
        if(!isAlphanumeric(s[left])){
            left ++;
            continue;
        }
        if(!isAlphanumeric(s[right])){
            right --;
            continue;
        }

        if(s[left].toLowerCase() !== s[right].toLowerCase()){
            return false;
        }
        left ++;
        right--;
    }
    return true;
};

function isAlphanumeric(char){
   return /[a-z0-9]/i.test(char);
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) // true

//time complexity O(n) - we are iterating through the string once
//space complexity O(1) - we are not using any extra space