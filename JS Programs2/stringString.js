/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.search(needle);
//  return haystack.indexOf(needle);
};
console.log(strStr("sadMesad","sad"));
