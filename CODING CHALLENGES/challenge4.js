var fn = require("./try1.js");
function get_sorted_diff_string(first, second){
    // console.log(first + "  " + second);
    var final=[];
    if(first =="" && second == ""){
        // console.log("there is no arguments !!!!")  when no arguments
        return "";
    }
    else if( first == second){  
        // console.log("both are equal !!!!!.....");  when both strings are equal
        return "";
    }
// when first string is not given 
    else if (second == "" && first != "")
    {
         fn.get_sorted_without_duplicates(first);
        }
    else{ 
        for (let i=0;i<first.length;i++)
        {   
        var charfound = false;
        for(let j=0;j<second.length;j++)
            {
            if (first[i] == second[j])
                {   charfound = true;
                break;
                }
            }
          if(!charfound)
            {     
            final+=first[i];
            }   
        }
        }
        //console.log(final.length);  find array length ..
        // console.log(final);  display array
        var done = [...final]; // convert to array
        final=''; //clearing the final array 

//bubble sort   
        for(let i=0;i<done.length;i++)
        {
            for(let j=i+1;j<done.length;j++)
            { 
                if (done[i]>done[j])
                {
                    let temp = done[i];
                    done[i] = done[j];
                    done[j] = temp;
                }
            }
        }
// creating the final array and inserting ..
        for(let i=0;i<done.length;i++){ 
            final+=done[i]; }
        //console.log(final);   display the final array list .. 
        return final;
}
// console.assert("" , get_sorted_diff_string("apple", "apple"))
// console.assert("aelp", get_sorted_diff_string("apple", ""))
// console.assert("do", get_sorted_diff_string("dog", "pig"))
// console.assert("in", get_sorted_diff_string("pineapple", "apple"))