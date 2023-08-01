// Rest parameters (...) allow us to represent an indefinite number of arguments as an array within a function. 
// It enables us to handle multiple arguments without explicitly defining each one in the function signature.

var argumentsLength = function(...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
