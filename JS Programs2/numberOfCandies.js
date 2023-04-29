// console.log("Hello, world!");
// var array = [1,2,3,4];
// for(let i = 0; i <= array.length - 1;i++){
//     array[i] = array[i] + 3;
// }
// console.log(array)
var numberOfCandies = function (candies, extraCandies) {
    var sortedCandies = [...candies].sort().map(x => x + extraCandies); 
    for(let kid = 0; kid <= candies.length - 1; kid++) {
        candies[kid] = candies[kid] + extraCandies;
        if(candies[kid] == sortedCandies[0]){
            candies[kid] = false;
        }
        else{
            candies[kid] = true;
        }
    }
    return candies;
}

console.log(numberOfCandies([4,2,1,1,2],1));

// function greatNum(array) {
//     array.sort();
//     return array[array.length - 1];
// }

// console.log(greatNum([1,2,3,4]))