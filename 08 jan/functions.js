const minCheck = function (a, b) {
    //Compare A to B, return the smallest one
    numA = parseFloat(a);
    numB = parseFloat(b);
    if (a === b) {
        return "equal"
    }
    else if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

