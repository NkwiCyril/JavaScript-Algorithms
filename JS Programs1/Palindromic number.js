/**
 * 
 * JS program to check if number is palindromic i.e the number is the same when seen backward and forward
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var numString = x.toString(); // type-cast the number into a string so as to commence with the methods below
    console.log(numString); // checking...
    var numSplit = numString.split(''); // split the string in order to access each index (the numbers to be precise)
    console.log(numSplit);// checking...
    var numReverse = numSplit.reverse(); // reverse the order of each index to see if it corresponds when not reversed
    console.log(reverse);
    var numJoin = numReverse.join(''); //join and compare with original number, x
    console.log(numJoin);
    if(x == numJoin){
        return true;
    }
    else return false;
    
};
console.log(isPalindrome(122))