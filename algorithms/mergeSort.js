/**
 * Merge sort
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
 * Merge sort helper function to merge to arrays
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
