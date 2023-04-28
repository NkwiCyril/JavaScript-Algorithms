//output random numbers in a range

function randomRange(myMin, myMax) {
    // Only change code below this line

    console.log(Math.floor(Math.random() * (myMax-myMin + 1)) + myMin) ;

    // Only change code above this line
  }

  randomRange(1,6);

//using the parseInt() function
console.log("Converted to an integer is: " + parseInt("101011",2));

//Using the conditional(ternary operator)
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not equal"; // a?b:c
  }
  
  console.log(checkEqual(1, 2));

//Checking the sign of a number with the use of multiple conditional operators

function checkSign(num) {
    return (num > 0) ? "positive"
      : (num < 0) ? "negative"
      : "zero";
  }
  
  console.log(checkSign(-10));