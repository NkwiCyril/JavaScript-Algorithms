/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let possible_dups = 0;
    let length = arr.length - 1;
    
    for(let left = 0; left <= length - possible_dups; left++){
        //counting the zeros
        if(arr[left] == 0){
            // Edge case: This zero can't be duplicated. We have no more space,
            // as left is pointing to the last element which could be included
            if(left == length - possible_dups){
                arr[length] = 0;
                length -= 1;
                break;
            }
            possible_dups++;
        }
    }

    //start backwards from the last element which would be part of a new array.
    let last = length - possible_dups;

    //copy zero twice and non-zero once
    for(let i = last; i >= 0; i--){
        if(arr[i] == 0){
            arr[i + possible_dups] = 0;
            possible_dups--;
            arr[i + possible_dups] = 0;
        }
        else{
            arr[i + possible_dups] = arr[i];
        }
    }
    return arr;
};

console.log(duplicateZeros([1,2,0,0,4,5]))