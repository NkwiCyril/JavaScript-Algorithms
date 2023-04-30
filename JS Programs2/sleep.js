// Given a positive integer millis, 
// write an asyncronous function that sleeps for millis milliseconds. 
// It can resolve any value.

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((resolve) =>{
        setTimeout(resolve,millis);
    })
}

sleep(100);