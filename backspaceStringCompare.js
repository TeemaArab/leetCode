// Backspace String Compare

/*

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

*/

// -------------------------------------------------------------------------------------------------------------
//pseudocode
/*

Start one pointer at the end of string s.
Start another pointer at the end of string t.

While at least one pointer is still inside its string:

    Find the next valid character in s:
        If the current character is "#":
            Increase skipS.
            Move the pointer left.

        Else if skipS is greater than 0:
            This character should be deleted.
            Decrease skipS.
            Move the pointer left.

        Else:
            Stop. This is a valid character.

    Find the next valid character in t:
        If the current character is "#":
            Increase skipT.
            Move the pointer left.

        Else if skipT is greater than 0:
            This character should be deleted.
            Decrease skipT.
            Move the pointer left.

        Else:
            Stop. This is a valid character.

    Compare the valid characters from s and t.

    If both characters exist and they are different:
        Return false.

    If one string still has a valid character
    but the other string is finished:
        Return false.

    Move both pointers one position to the left.

Return true.

*/

function backspaceCompare(s, t) {
    //using two pointers
    let i = s.length -1;
    let j = t.length -1;

    while( i> 0 || j> 0){
        let skipS = 0;
        let skipT = 0;

        while( i> 0){
            if(s[i] === '#'){
                skipS ++;
                i --;
            }else if(skipS > 0){
                skipS --;
                i --;
            }else{
                break;
            }
        }

        while( j > 0){
            if(t[j] === '#'){
                skipT ++;
                j --;
            }else if(skipT > 0){
                skipT --;
                j --;
            }else{
                break;
            }
        }
        if( i >= 0 && j>= 0 && s[i] !== t[j]){
            return false;
        }
        if(( i>= 0) !== (j >=0)){
            return false;
        }
         i--;
         j --;
    }
    return true;
};

console.log(backspaceCompare("ab#c", "ad#c")); // Output: true

//time complexity: O(n) where n is the length of the longer string
//space complexity: O(1) since we are not using any extra space