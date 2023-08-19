/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise((resolve , reject) => {
            setTimeout(() => reject("Time Limit Exceeded") , t)

            fn(...args).then((res) => resolve(res)).catch((err) => reject(err)) //if the function completes before time 't' then resolve, else reject with TLE
        })
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
