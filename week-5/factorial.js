function fact(num) {
    var fact = 1;
    for (var i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(fact);
    return fact;
}
fact(5);
