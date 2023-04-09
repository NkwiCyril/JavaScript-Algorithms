// check if N and its double exists in an array

var checkParam = function (numArray) {
    for (let start = numArray.length - 1; start >= 0; start--){
        for(let end = 0; end < numArray.length; end++){
            if(numArray[start] == (2 * numArray[end])){
                console.log(true) ;
            }
            console.log(false);
        }
    }
}
console.log(checkParam([1,2,3,4]))