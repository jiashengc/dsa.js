/**
 * Write code to reverse a C-Style String. 
 * (C-String means that “abcd” is represented as five characters, including the null character.)
 */

 /**
  * Time Complexity: O(n) 
  *
  * @method reverseCStyleString1
  * @param {String} string
  * @return {String} reversedString
  */
 function reverseCStyleString1(string) {
     let reversedString = '';
     for (let i = string.length - 2; i >= 0; i--) {
         reversedString += string[i];
     }
     reversedString += string[string.length - 1];
     return reversedString;
 }