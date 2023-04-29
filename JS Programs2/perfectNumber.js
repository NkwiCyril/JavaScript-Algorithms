// Problem: Return true if the sum of the first 2 numbes equal the sum of the last two numbers
//Method 1
var perfectNumber = function(num){
    // convert num to string to obtain num.length
    num.toString().length = 4;
    let numString = num.toString();
    for( let i = 0; i <= numString.length; i++){
        if (parseInt(numString[0] + numString[1]) === parseInt(numString[2] + numString[3])){
            return "This number is a perfect number";
        }
        else return "This number is not a perfect number";
    }
};

console.log(perfectNumber(1011));

// Method 2

