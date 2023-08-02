
var addTwoPromises = async function(promise1, promise2) {
    
    let ans = await promise1 + await promise2;
    return ans
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
