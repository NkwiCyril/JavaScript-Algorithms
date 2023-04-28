// creating a range of numbers
/**
 * 
 * count from a particular number (startNum) to another (endNum)
 * 
 * @param {number} startNum 
 * @param {number} endNum 
 * @returns 
 */
function rangeOfNumbers(startNum, endNum){
    if(endNum < startNum){
        return [];
    }
    else{
        const numbers = rangeOfNumbers(startNum, endNum-1);
        numbers.push(endNum);

        return numbers;
    }
}

console.log(rangeOfNumbers(1, 56));