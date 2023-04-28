/**
 * 
 * returning the number steps to reduce a number to zero by doing the following;
 *      -dividing the number by two when it is even and
 *      -subtract 1 form it when the number truns into an odd number
 * @param {number} num
 * @return {number}
 */

var numberOfSteps = function(num) {
    var steps = 0;
    while(num > 0){
        if(num % 2 == 0){
             num /= 2;
        }
        else {
             num = num - 1;
        }
        steps++;
        
    }
    return steps;
};

console.log("Number of steps: " + numberOfSteps(14))