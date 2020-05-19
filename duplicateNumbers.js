//sorted array of numbers, remove all duplicates in places such that each element appears only once - return new length of array

//input: sorted array of numbers
//output: number of unique numbers in the array

//arr = [-3,-3,-1,0,0,0,2,4,6,6] ==> 6
//arr= [] ==> 0

//arr = [-3,-3,4,6,6] ==> 3
function noDuplicates (arr) {
    let count = 0
    for (let i = 0; i<arr.length; i++){
        if(i===0 || arr[i] !== arr[i-1]) {
            count++
        }
    }
    return count
}

//arr = [-3,4,6]
function noDuplicatesArr (arr) {
    let i = 0
    while(i < arr.length){
        if (i===0 || arr[i] !== arr[i-1]){
            i++
        } else {
            arr.splice(i,1)
        }
    }
    return arr
}
//.       |
//arr = [-3,-3,4,6,6] ==> 3
function noDupLinear (arr) {
    let lastUnique = 0
    for (let i = 1; i< arr.length; i++) {
        if (arr[i]!== arr[lastUnique]) {
            lastUnique++
            arr[lastUnique] = arr[i]
        }
    }
    while(arr.length > lastUnique + 1 ) {
        arr.pop()
    }
    return arr
}
