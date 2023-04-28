/**
 * shorter code for palindrimic number program above
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x == x.toString().split('').reverse().join('')){
        return true;
    } 
    else return false;
    
};
console.log(isPalindrome("nile"))