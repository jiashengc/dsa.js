/**
 * Flattens a multi-dimensional array
 * 
 * @param {array} arr 
 * @return {array}
 */
function flattenArray(arr) {
    return arr.reduce(
        function(a,b) {
            return a.concat(Array.isArray(b)) ? flattenArray(b) : b;
        }, []);
}