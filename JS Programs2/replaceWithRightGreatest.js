/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {

    return arr.map((prev,currentIndex, array) => {
        if(array.length === 1) {
            return -1
        }

        else {
            let temp = array[currentIndex + 1]

            if (currentIndex == array.length - 1) {
                return -1
            }

            return Math.max(...array.slice(currentIndex + 1))

            
        }
    })

    
};
