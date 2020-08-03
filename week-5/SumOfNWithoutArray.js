function sumofarray() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
        var i = a_1[_a];
        sum += i;
    }
    console.log(" the sum of array is " + sum);
    return sum;
}
sumofarray(1, 2, 3, 4, 5);
