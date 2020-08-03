function sumofarray(...a:Array<number>) : number {
    var sum = 0;
    for (let i of a){
        sum+=i
    }
    console.log(" the sum of array is " + sum);
    
    return sum;
}
sumofarray(1,2,3,4,5);