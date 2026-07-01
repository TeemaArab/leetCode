/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1
 */

var firstUniqChar = function(s) {
    for(let i =0; i<s.length; i++){
        let count = 0;

        for( let j =0; j< s.length; j++){

            if( s[j]=== s[i]){
                count ++;
            }
        }
            if(count === 1){
                return i;
            }
        }
        return -1
    
};
console.log(firstUniqChar("paint"));

// the above solution has a time complexity of O(n^2) because we are using two nested loops to traverse the string. The space complexity is O(1) because we are not using any extra space.

// the solution below is more optimized
var firstUniqChar = function(s) {
  let map = new Map();
 
  for( let i = 0; i < s.length; i++){
     let char = s[i];
   
    if(!map.has(char)){
         map.set(char, (map.get(char) || 0) + 1 );
    }else{
        map.set(char, map.get(char) +1)
    }
  }
    
   for( let  i = 0; i<s.length; i++){
    let char = s[i];
    if(map.get(char)=== 1){
        return i;
    }
   }
  return -1;
  
};
console.log(firstUniqChar("lleet"));

// time complexity: O(n) because we are traversing the string twice. The space complexity is O(n) because we are using a map to store the frequency of each character in the string.
