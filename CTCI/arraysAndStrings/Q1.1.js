/**
 * Implement an algorithm to determine if a string has all unique characters. 
 * What if you can not use additional data structures?
 */

/**
 * Time Complexity: O(n^2)
 * 
 * @method uniqueCharacters
 * @param {String} string
 * @return {boolean}
 */
function uniqueCharacters(string) {
    for (let i = 0; i < string.length; i++) {
        for (let n = i + 1; n < string.length; n++) {
            if (string[i] === string[n]) {
                return false;  
            }
        }
    }
    return true;
}
