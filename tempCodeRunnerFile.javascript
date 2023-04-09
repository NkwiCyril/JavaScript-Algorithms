
function checkIfExists(num) {
    for( let i = num.length - 1; i >= 0; i--){
        for(let j = 0; j < num.length;j++){
            if(num[i] == 2 * num[j]){
                return true
            }
        }  
    }
    return false
};
console.log(checkIfExists([3,1,7,6]))