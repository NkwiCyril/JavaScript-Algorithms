/**
 * JS program to return the maximum number of ones(1) from an array.
 * 
 * @param {number} nums 
 */

var findMaxConsecutiveOnes = function(nums) {
    let numNums = 0;

    for(let i = 0; i <= nums.length - 1; i++){
        if(nums[i] === 1){
            numNums++;
        }
    }
    return numNums;
};
console.log(findMaxConsecutiveOnes([1,1,1,1,5,6,7,1]))