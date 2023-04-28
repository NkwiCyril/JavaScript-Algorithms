var findMaxConsecutiveOnes = function(nums) {
    let numNums = 0;
    let numNums1 = 0;
    for(let i = 0; i <= nums.length - 1; i++){
        if(nums[i] === 1){
            numNums++;
            numNums1++;
            console.log(numNums);
            console.log(numNums1);
        }
    }
};
console.log(findMaxConsecutiveOnes([1,1,1,1]))