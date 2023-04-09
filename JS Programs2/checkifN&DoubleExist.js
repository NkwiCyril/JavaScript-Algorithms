/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for( let i = arr.length - 1; i >= 0; i--){
        for(let j = 0; j < arr.length; j++){
            if(parseInt(arr[i]) === parseInt(2 * arr[j])){
                return true
            }
        }  
    }
    return false
};
console.log(checkIfExist([[-2,0,10,-19,4,6,-8]]))