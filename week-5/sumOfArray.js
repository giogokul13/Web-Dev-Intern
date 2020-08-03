function SumOfArray() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i in n) {
        sum += n[i];
    }
    console.log(sum);
    return sum;
}
SumOfArray(1, 2, 3, 4, 12, 23, 12);
