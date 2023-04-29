function greatNum(array) {
    array.sort();
    return array[array.length - 1];
}

console.log(greatNum([1,2,3,4]))

