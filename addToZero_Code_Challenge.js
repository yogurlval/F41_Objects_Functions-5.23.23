
let nums = [1, 4, 11, 2, 37, -4]

let result = false

for (let i = 0; i < nums.length; i++){
    for (let k = 0; k < nums.length; k++){
        if(nums[i] + nums[k] === 0 && i !==k){
            result = true
        }
    }
}
console.log(result)

function addToZero(arr){
    let result = false

for (let i = 0; i < nums.length; i++){
    for (let k = 0; k < nums.length; k++){
        if(arr[i] + arr[k] === 0 && i !==k){
            result = true
        }
    }
}
return result
}
console.log(addToZero(nums))