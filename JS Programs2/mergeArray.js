/*============================= METHOD 1 ============================*/

var merge = function (nums, m, nums2, n){ // note that the length method counts for 1 upwards; not 0
    let newNums = []; // new nums to store split nums1
    let newNums2 = []; // new nums to store split nums2
    let mergeNums = []; // new nums to store merged nums
    let sortedNums = []; // new sorted nums
    // splitting the nums1

    for(let front = 0; front <= m - 1; front++){
        newNums.push(nums[front]);
         // add elements into the 1st nums 
        }
    //splitting the nums2
    for(let front = 0; front <= n - 1; front++){
        newNums2.push(nums2[front]);
        // add elements into the 2nd nums
    }
    mergeNums = newNums.concat(newNums2); // concatenate both numss
    sortedNums = mergeNums.sort(); // sort the  merged numss in ascending order
    return sortedNums;
    
};

/*==================== METHOD 2 ========================*/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function (nums, m, nums2, n){
    nums.length = m ;
    nums2.length = n;
    nums = nums.concat(nums2).sort();
    console.log(nums);
};
merge1([1,2,3,4],3,[5,6,7],3);

