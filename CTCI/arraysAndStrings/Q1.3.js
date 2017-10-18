/**
 * Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer. 
 * NOTE: One or two additional variables are fine. An extra copy of the array is not.
 * 
 */

// function removeDuplicates1(string) {
//     for (let i = 0; i < string.length; i++) {
//         for (let n = i + 1; n < string.length; n++) {
//             if (string[i] === string[n]) {
//                string = string.slice(0, i + 1) + string.slice(n, string.length);
//                n--;
//             }
//         }
//     }
//     return string;
// }
