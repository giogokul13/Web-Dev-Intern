// pgm to dispaly n odd numbers in reverse
function get_odds_list(count)
{
   var a =new Array();
   var b = new Array();
   var i=0;
//    console.log(a.length);  length of array 
    if (count == 0 ){
         return "";
    }
    while(count > a.length)
    {   //condition to check odd or even 
        if(i % 2 == 1){
            a.push(i);
        }
        i++;
    } 
    //  console.log(a.length);  
    //console.log(a);  displays the array

    // for loop to store the reversed array in the new array
    for(let i=0;i < a.length ; i++){
        b[i] = a[a.length - i -1];     
    }
    // console.log(b);  to print the array !
    return b ;

    // console.assert([1],get_odds_list(1))
    // console.assert([], get_odds_list(0))
    // console.assert([5,3,1],get_odds_list(3))
    // console.assert([9,7,5,3,1], get_odds_list(5))
} 
get_odds_list(10);