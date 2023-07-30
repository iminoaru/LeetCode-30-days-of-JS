// Uses closure and its properties.


var createCounter = function(init) {
    let temp = init

        const increment = () => {
            return ++temp;
        }

        const decrement = () => {
            return --temp;
        }

        const reset = () => {
            temp = init;
            return temp;
        }
    
    return {increment , decrement , reset} // returning an object containing the 3 fns.

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
