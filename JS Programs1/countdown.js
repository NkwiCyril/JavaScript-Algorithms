 // Only change code below this line
function countdown(n){
    if(n < 1){
        return [];
    }
    else {
        
        const countArray = countdown(n-1);
        countArray.push(n);

        return countArray;
    }
    
  }
  // Only change code above this line

  console.log(countdown(10));