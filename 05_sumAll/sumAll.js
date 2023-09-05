const sumAll = function(startInt, endInt) {
    if (!Number.isInteger(startInt) || !Number.isInteger(endInt)) return 'ERROR';
    if (startInt < 0 || endInt < 0) return 'ERROR';
    
    if (startInt < endInt) {
        var min = startInt;
        var max = endInt;
    } else {
        var min = endInt;
        var max = startInt;
    }

    var sumOutput = 0
    for (i = min; i<= max; i++) {
        sumOutput += i;
    }
    return sumOutput;
};

// Do not edit below this line
module.exports = sumAll;
