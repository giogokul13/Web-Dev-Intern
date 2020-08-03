function fact(num:number) :number{
    var fact = 1;
    for(let i =1;i<=num;i++){
        fact*=i;
    }
    console.log(fact);
    return fact;
}
fact(5);