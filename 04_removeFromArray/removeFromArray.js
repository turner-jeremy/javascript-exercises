const removeFromArray = function() {
    
    const array = arguments[0]; // Array of 1st argument which will be original array

    // Create new array for any arguments to be removed (index > 0)
    const removeItem = []; 
    for (let i = 1; i < arguments.length; i++) {
        removeItem.push(arguments[i]);
    }

    // Loop through original array and remove matching items
    for (let r of removeItem) {
        const index = array.indexOf(r);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

// npm test removeFromArray.spec.js