
var filter = function(arr, fn) {
    let filteredArr = []

    for(let i = 0 ; i < arr.length ; i++){
        if(fn(arr[i] , i) != 0){ 
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr
};
