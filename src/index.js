
// You should implement your task here.

module.exports = function towelSort(matrix) {
    
    if (!matrix) return [];
    if (matrix === []) return [];

    matrix = matrix.reduce((arr, item, index) =>index%2==0 ? arr.concat(item) : arr.concat(item.reverse()), [])
    
    return matrix;
}
