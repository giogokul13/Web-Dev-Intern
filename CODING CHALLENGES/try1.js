//  pgm to remove the dulpicates and rearrange in ascending order 

function get_sorted_without_duplicates(string){
    var final = '',done ='';
    for (let i=0;i<string.length;i++)
    {   var charfound = false;
        for(let j=0;j<final.length;j++)
        {
            if (string[i] == final[j])
            {   charfound = true;
                break;
            }
        }
          if(!charfound)
          {
            final+=string[i];
          }   
    }
    // console.log("The non repeated string : " + final);
    let finalarr = [...final]; // this is used to change the string to array 
    
    // bubble sort 

    for(let i=0;i<finalarr.length;i++)
    {
        for(let j=i+1;j<finalarr.length;j++)
        { 
            if (finalarr[i]>finalarr[j])
            {
                let temp = finalarr[i];
                finalarr[i] = finalarr[j];
                finalarr[j] = temp;
            }
        }
    }
    // console.log( "the final array is : "+ finalarr);

    // array to string 
    for (let i=0;i<finalarr.length;i++)
    {
        done +=finalarr[i];
    }
    // console.log("the final string after rearranging :  "+ done);
    return done;
}

get_sorted_without_duplicates("google");