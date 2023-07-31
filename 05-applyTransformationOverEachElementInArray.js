
var map = function(arr, fn) {
    let modifiedArr = []
    for(let i = 0 ; i < arr.length ; i++){
        modifiedArr[i] = fn(arr[i] , i); // completes the asked modification present in the 'fn' and add it th a new array.
    }
    
    return modifiedArr;
};
