
//Given an integer array to return a 'string array' answer
// answer[i] == "FizzBuzz" if i is divisible by 3 and 5
// answer[i] == "Fizz" if divisible by 3
// answer[i] == "Buzz" if divisible by 5
// answer[i] == "i"(as a string) if none of the above conditions is true


/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for(let i = 1; i <= n; i++){
        if((i % 3 == 0) && (i % 5 == 0)){
            answer.push("FizzBuzz");
        }
        else if(i % 3 == 0){
            answer.push("Fizz");
        }
        else if(i % 5 == 0){
            answer.push("Buzz");
        }
        else {
            answer.push(i.toString());
        }
    }
    return answer;
};
console.log(fizzBuzz(5));