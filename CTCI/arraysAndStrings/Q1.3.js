/**
 * Design an algorithm and write code to remove the duplicate characters in a string without using any additional buffer. 
 * NOTE: One or two additional variables are fine. An extra copy of the array is not.
 * 
 */

function removeDuplicates1(string) {
    let hash = {};
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        if (!hash[string[i]]) {
            hash[string[i]] = true;
            newString += string[i]; 
        }
    }

    return newString;
}
