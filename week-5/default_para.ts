function defaultpara(x:number, y:number=5):number{
    return x + y;
}

var a = defaultpara(1,3);
console.log(a);  //output will be 4
var b  = defaultpara(1);
console.log(b) // output will be 6 