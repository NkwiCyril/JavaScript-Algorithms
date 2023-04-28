/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let calc = [nums.length];
    calc[0] = nums[0]; 

    for(let i = 1; i < nums.length; i++){
        calc[i] = nums[i] + calc[i-1];
    }
    console.log(calc);
};
runningSum([1,2,3,4]);
runningSum([1,1,1,1,1]);
runningSum([3,1,2,10,1]);

//arrow function to derive the concatenation of two arrays
var myConcat = (array1, array2) => array1.concat(array2);

console.log(myConcat([1,2,3],[4,5,6,7,8,9,10]))