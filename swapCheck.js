//given integer m, 2 nonempty zero-indexed array A and B each have n integers, each integer is <= m
// goal: check if there is a swap operation that can be performed such that sum of elements in A = sum of elements in B
// picking one element from A and one from B to swap
// return boolean

//sum of A - sum of B = k, if k > 0, look for k/2 in A
//A = B + k, B
// A = B +k -k/2 , B+k/2

//A = B + k, B
//say k/2 is in A and 0 in B
// A = B + k - k/2 + 0, B + k/2 - 0
//say k/2 + c  is in A
// A = B + k - (k/2 +c) + m = B + k/2 - c + m
// B + (k/2 + c) - m

// (+ c) = - c + 2m
//m = c
//if k/2 + c is in A, then I need c in B (assuming A > B)
//larger - smaller = k
//go through larger array, solving for c and looking for c in smaller

//array length m, put the needed values at a certain index maybe
//sum A, sum B
// take smaller, "hash" it into array by putting each value at its own index
// for each thing in A, check if the c needed is "true" - 0/1 in the index in the array

function swapCheck(m, A, B) {
  let aSum = A.reduce((accum, curr) => accum + curr, 0)
  let bSum = B.reduce((accum, curr) => accum + curr, 0)
  let [larger, smaller, diff] = aSum > bSum ? [A, B, aSum - bSum] : [B, A, bSum - aSum]
  let hashArr = new Array(m + 1).fill(0)

  smaller.forEach(val => hashArr[val] = 1)
  for (let i = 0; i < larger.length; i++) {
    if (hashArr[larger[i] - (diff / 2)]) {
      return true
    }
  }
  return false
}

console.log(swapCheck(7, [1, 3, 5, 6], [2, 3, 1, 5]))
