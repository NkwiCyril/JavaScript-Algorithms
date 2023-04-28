/**
 * 
 * JS program to the number of numbers with an even number of digits
 * e.g var num = [23,232,12]; 
 * num[0] and num[3] have an even number of digits hence the program returns 2; 
 * 
 * @param {number[]} nums
 * @return {number}
 */
function getDigits(num) {
    let countDigits = 0;
    
    if(num === 0) {
        return 1;
    }

    while(num > 0) {
        num = parseInt(num / 10);
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