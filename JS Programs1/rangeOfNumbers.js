// creating a range of numbers

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