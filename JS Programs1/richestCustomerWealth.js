/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let wealth = 0;
    let sum;
    let m = accounts.length;
    let n = accounts[0].length;
        for( let i = 0 ; i < m;i++){ //row
            sum = 0;
            for(let j = 0; j < n;j++){ //column
                sum += accounts[i][j];
            }
            wealth = Math.max(wealth,sum);
        }
        return wealth;
};

console.log(maximumWealth([1,2,3],[3,2,1]))
console.log(Math.max(89,99)
)