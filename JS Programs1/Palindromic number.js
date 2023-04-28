/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var numString = x.toString();
    var numSplit = numString.split('');
    var numReverse = numSplit.reverse();
    var numJoin = numReverse.join('');
    if(x == numJoin){
        return true;
    }
    else return false;
    
};
console.log(isPalindrome(122))