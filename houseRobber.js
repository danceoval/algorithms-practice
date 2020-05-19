// house robber
// pro house robber planning to rob houses
// houses on a street, can't break into two adjacent houses
// given a list of non neg integers = amount of money in each house, determine max amount I can get tonight without alerting police
// [3,4,8,2,0,9]

//input: arr of household money
//output: max amount I can steal from non adjacent households

//[y,n,-->y...]
//[y,n,-->n...]

//[n, y, n,-->y ...]
//[n, y, n,-->n ...]

function robbing(arr) {
  if (arr.length === 1) {
    return arr[0]
  }
  if (arr.length === 0) {
    return 0
  }
  //maxes = new Array(arr.length)
  //let mid = Math.floor(arr.length/2)
  //4 + robbing(arr without first three elements)
  //3 + robbing(arr without first two elements)

  let max1 = arr[0]
  let max2 = arr[1]
  for (let i = 2; i < arr.length; i++) {
    let max1 += arr[i]
    let max2

  }

}
