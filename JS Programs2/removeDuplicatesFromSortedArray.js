/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    nums = nums.sort((a, b) => a - b); //sorting the array in non-decreasing order(ascending order)
    console.log(nums)
    for(let end = nums.length; end >= 0; end--){
        if(nums[end] === nums[end + 1]){
            nums.splice((end + 1),1);
        }
    }
    let k = nums.length; //returning the final length of the array
    console.log(nums)
    return k;
};
console.log(removeDuplicates([-3,-1,0,0,0,3,3]));