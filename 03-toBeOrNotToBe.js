// The colon : is used in object literals to assign values to keys. 
// In the code provided, toBe is a key in the object returned by the expect function, 
// and it has a function as its value. This construct is often used to create a simple form 
// of the "Builder Pattern" or to define methods within an object.
// Inside the expect function, an object literal is created and returned.
// The returned object has two properties, toBe and notToBe, both of which are functions.

// This pattern is commonly used in testing libraries to provide a simple way to assert values in test cases.

var expect = function(val) {
    return { // returning object.
        toBe : (val2) => {
            if(val !== val2) throw new Error("Not Equal");
            else return true;
        }, // , is used to separate properties when defining an object literal with multiple key-value pairs.

        notToBe : (val2) => {
            if(val === val2) throw new Error("Equal");
            else return true;
        }
    }
};


/**
 * expect(5).toBe(5); // true // this is function chaining, gives 5 as input to 'expect' and 5 to 'toBe'.
 * expect(5).notToBe(5); // throws "Equal"
 */
