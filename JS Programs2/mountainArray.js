// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    for(let i = 0; i <= arr.length - 1;i++){
        if(arr[0] < arr[1] < arr[i - 1] < arr[i]){
            return true;
        }
        if(arr[i] > arr[i + 1] > arr[arr.length - 1]){
            return false;
        }
    }
};
console.log(validMountainArray([1,2,3]))