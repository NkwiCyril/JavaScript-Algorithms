/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
    for(let i = 0; i <= nums.length;i++){ //to loop through the first
       for(let j = i+1; j <= nums.length;j++){
        if((nums[i] + nums[j]) == target){
            console.log([i,j]) ;
            
       }
       
    }
    }
};
twoSum([3,2,4], 6);