/**
 * @param {Function} fn
 */
function memoize(fn) {

    let cache = new Map();

    return function(...args) {
    
        let key = JSON.stringify(args);
        if(cache.has(key)) return cache.get(key);
        
        let result = fn(...args);

        cache.set(key, result);
        return result;
    }
}

// memorize calculates a value on ce and if the same calculation appears, it 
// doesn't recalculate it and rather pulls back the previous answer from cache.
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
