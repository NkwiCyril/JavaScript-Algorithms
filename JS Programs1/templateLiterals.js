const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi","no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const failureItems = [];
    for(let i = 0; i <= arr.length-1; i++){
        failureItems.push(`<li class="text-warning">${result.failure[i]}</li>`); //printing string with a template literal
    }
    // Only change code above this line
  
    return failureItems;
  }
  
const failuresList = makeList(result.failure);
console.log(failuresList);