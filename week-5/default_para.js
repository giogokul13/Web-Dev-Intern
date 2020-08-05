function defaultpara(x, y) {
    if (y === void 0) { y = 5; }
    return x + y;
}
var a = defaultpara(1, 3);
console.log(a); //output will be 4
var b = defaultpara(1);
console.log(b); // output will be 6 
