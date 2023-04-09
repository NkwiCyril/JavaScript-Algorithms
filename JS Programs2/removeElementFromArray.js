// removing an element from an array 

/*============================ METHOD 1 ==================================*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for( let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
console.log(removeElement([0,1,2,2,3,0,4,2],2))

/*============================ METHOD 2 ==================================*/
var removeElement2 = function(nums, val) {
    for( let j = nums.length; j >= 0; j--){ // iterate through the array backwards 
        if(nums[j] === val){
            nums.splice(j,1); // delete any val encountered at a deleteCount of 1
        }
    }
    // let k = nums.length; //return k as the new nums length
    return nums;
};

console.log(removeElement2([0,1,2,2,3,0,4,2],2))

