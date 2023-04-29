/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    var newNums;
    for(let i = 0; i < nums.length  ; i++) {
        for(let j = nums.length + 1; j > 0; j--) {
            let searchMe = nums.indexOf(j);
            if (searchMe == -1) {
                var newNums = nums.push(j); 
            }        
        }
    }
    return newNums;
};
console.log(findDisappearedNumbers([2,4]));