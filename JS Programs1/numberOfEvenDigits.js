/**
 * @param {number[]} nums
 * @return {number}
 */
function getDigits(num) {
    let countDigits = 0;
    
    if(num === 0) {
        return 1;
    }

    while(num > 0) {
        num = parseInt(num / 10); // do research on this section
        countDigits++;
    }
    
    return countDigits;
}
var findNumbers = function(nums) {
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        let stringNum = getDigits(nums[i]);
        if((stringNum % 2) === 0){
             count++;
        }
        
    }
    return count;
};


console.log(findNumbers([1,12,33,232]))