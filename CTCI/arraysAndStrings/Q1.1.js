/**
 * Implement an algorithm to determine if a string has all unique characters. 
 * What if you can not use additional data structures?
 */

/**
 * Time Complexity: O(n^2)
 * 
 * @method uniqueCharacters1
 * @param {String} string
 * @return {boolean}
 */
function uniqueCharacters1(string) {
    for (let i = 0; i < string.length; i++) {
        for (let n = i + 1; n < string.length; n++) {
            if (string[i] === string[n]) {
                return false;  
            }
        }
    }
    return true;
}

/**
 * Time Complexity: O(n)
 * 
 * @method uniqueCharacters2
 * @param {String} string 
 * @return {boolean}
 */
function uniqueCharacters2(string) {
    let map = {};
    for (let i = 0; i < string.length; i++) {
        if (map[string[i]]) {
            return false;
        } 
        map[string[i]] = true;
    }
    return true;
}
