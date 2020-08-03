function FactOfNElements(...ar:Array<number>):void{
    var final:Array<number>=[];
    for(let i = 0;i<ar.length;i++){
        final[i] =  fact(ar[i]);
    }
    console.log(final);
}
function fact(n:number):number{
    let f:number=1;
    for(let i=1;i<=n;i++){
        f=f*i;
    }
    return f;

}
FactOfNElements(5,4,3,12,34);