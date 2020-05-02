// LeetCode
// 417. Pacific Atlantic Water Flow
// Medium

// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

// Note:

// The order of returned grid coordinates does not matter.
// Both m and n are less than 150.


// Example:

// Given the following 5x5 matrix:

//   Pacific ~   ~   ~   ~   ~
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * Atlantic

// Return:

// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).



/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
  let m = matrix.length
  let n = matrix[0].length
  let pacificMatrix = new Array(m).fill(0)
  pacificMatrix = pacificMatrix.map(entry => new Array(n).fill(0))
  pacificMatrix[0].fill('y')
  pacificMatrix.forEach(row => {
    row[0] = 'y'
  })

  const pacificFill = function (i, j) {
    if (pacificMatrix[i][j]) {
      return pacificMatrix[i][j]
    } else {
      if ((pacificFill(i - 1, j) === 'y' && matrix[i - 1][j] <= matrix[i][j]) || (pacificFill(i, j - 1) === 'y' && matrix[i][j - 1] <= matrix[i][j])) {
        pacificMatrix[i][j] = 'y'
        return 'y'
      } else {
        pacificMatrix[i][j] = 'n'
        return 'n'
      }
    }
  }

  pacificFill(n - 1, m - 1)

  console.log(pacificMatrix)
};

pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]])
