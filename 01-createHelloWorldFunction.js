
var createHelloWorld = function() {
    return function(...args) { // takes any number of arguments.
        return "Hello World"
        
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
