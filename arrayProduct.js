//given array nums of n integers, where n > 1
//return array output s.t. output at i = product of all elements of nums except num[i]

//[3,2,5,1]
//[10,15,6,30]

//30
//10
//[3,6,30,30]
//split array at the index

//[1,3,6,30]
//[10,5,1,1]

function products(arr) {
    let left = [1]
    for(let i=0;i<arr.length-1;i++){
        left.push(left[i]*arr[i])
    }
    let right = new Array(arr.length)
    right[arr.length-1] = 1
    for(let i=arr.length-1;i>0;i++){
        right[i-1] = right[i]*arr[i]
    }

    return left.map((leftProd,idx) => leftProd*right[idx])
}
