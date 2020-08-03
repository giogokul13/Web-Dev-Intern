function SumOfArray(...n:Array<number>):number{
    var sum:number=0;
    for(let i in n)
    { 
        sum+= n[i];
    }
    console.log(sum);
    return sum;
}
SumOfArray(1,2,3,4,12,23,12);