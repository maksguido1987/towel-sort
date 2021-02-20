
// You should implement your task here.

module.exports = function towelSort(matrix) {
    
    if (!matrix) return [];
    if (matrix === []) return [];

    return matrix.reduce((arr, item, index) => arr.concat(index%2==0 ? item : item.reverse()), [])

}
