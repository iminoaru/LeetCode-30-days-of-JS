
var createCounter = function(n) {
    return function() {
        n = n + 1 // increments it
        return n - 1 // decrements it by 1 so we can start with the original 'n'. without it o/p => 11,12,13 (we need 10,11,12)
    };
    
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
