/*  
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

function isAnagram(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let map = new Map();
    
    for( let i = 0; i<s.length; i ++){
       let char = s[i]
       let frequency = map.get(char);

       if(map.has(char)){
        frequency = frequency + 1;

       }else{
        frequency = 1;
       }
       map.set(char, frequency);

    }

    for( let i = 0; i< t.length; i ++){
        let char = t[i];
        let frequency = map.get(char);
        
        if(map.has(char)){
            frequency = frequency -1;

            if(frequency < 0){
                return false;
            }
            map.set(char,frequency);
        }else{
            return false;
        }
    }


    return true;
}

console.log(isAnagram("anagram", "nagaram"));