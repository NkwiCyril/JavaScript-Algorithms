/**
 * @param {number[]} nums
 * @return {number[]}// 
 */
var sortArrayByParity = function(nums) {
    for(let i = 0; i <= nums.length - 1; i++){
        if(nums[i] % 2 === 0){
            let even = parseInt(nums.splice(i,1));
            nums.unshift(even);
        }
    }
    return nums;
};

console.log(sortArrayByParity([3,1,2,4]));