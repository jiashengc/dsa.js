/**
 * @method quickSort
 * 1. Return the array if the array length is less or equals to 1
 * 2. Take the first value of the array as the pivot
 * 3. Loop through the array starting at position 1
 *    - if the value of the array's current position is less than the pivot, push to the left array
 *    - else, the value is larger or equal, so push to the right array
 * 4. QuickSort the left array, and then concat it with the pivot, and then concat with the right array
 * 
 * @param {array} array 
 * @return {array} array - Ordered array in ascending order
 */
function quickSort(array) {
    if (array.length <= 1) return array;

    let left = new Array();
    let right = new Array();
    let pivot = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}
