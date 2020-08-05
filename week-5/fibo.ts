function fibo(n:number):void{
    var a:number=0,b:number=1;
    var c:number;
    console.log(a);
    console.log(b);
    for (let i=0;i<n-2;i++){
        c =a+b;
        console.log(c);
        a=b;
        b=c;
    }
}
fibo(5); 