function fibo(n) {
    var a = 0, b = 1;
    var c;
    console.log(a);
    console.log(b);
    for (var i = 0; i < n - 2; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
fibo(5);
