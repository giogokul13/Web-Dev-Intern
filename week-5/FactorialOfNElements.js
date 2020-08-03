function FactOfNElements() {
    var ar = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ar[_i] = arguments[_i];
    }
    var final = [];
    for (var i = 0; i < ar.length; i++) {
        final[i] = fact(ar[i]);
    }
    console.log(final);
}
function fact(n) {
    var f = 1;
    for (var i = 1; i <= n; i++) {
        f = f * i;
    }
    return f;
}
FactOfNElements(5, 4, 3, 12, 34);
