/**
 * @method mergeSort
 * 1. Return the array if the length is less or equals to 1
 * 2. Find the mid position of the array by dividing the array length by 2
 * 3. Slice the array into left and right
 *    - From position 0 till the (mid - 1) will go into the left array
 *    - From position mid till the end of array will go into the right array
 * 4. Return the merge the merge sorted left array and the merge sorted right array
 * 
 * @param {array} array - Unordered array
 * @return  {array} array - Ordered array in ascending order
 */
function mergeSort(array) {
    if (array.length <= 1) return array;

    let mid  = parseInt(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid, array.length);

    return merge(mergeSort(left), mergeSort(right));
}

/**
 * @method merge - helper function for mergeSort
 * 1. While there is still values in the left and right array
 *    - push the first value from the left array into the results array if it's large or equals than
 *      the right array's first value and shift the left array first value (delete the value)
 *    - else push the first value from the right array into the results and shift the right array
 *      first value (delete the value)
 * 2. While the left array still has values, push those values into the results array
 * 3. While the right array still has values, push those values int the results array
 * 
 * @param {array} left  
 * @param {array} right 
 * @return {array} merged array - merged array in ascending order
 */
function merge(left, right) {
    let result = [];

    while(left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while(left.length) {
        result.push(left.shift());
    }

    while(right.length) {
        result.push(right.shift());
    }

    return result;
}
