type operator = number | string ;

function concat_add(val1:operator,val2:operator):operator
{
    if (typeof val1 ==="string" && typeof val2 ==="string"){
        return val1 + val2;
    }
    else if (typeof val1 ==="number" && typeof val2 ==="number"){
        return val1 + val2 ;
    }

    return null;
}

var a = concat_add("hi ","this is string ");
console.log(a);
console.log(typeof a);
var b = concat_add(1212,2323);
console.log(b);
console.log(typeof b);