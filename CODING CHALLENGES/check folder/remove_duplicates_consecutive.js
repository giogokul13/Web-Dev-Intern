function removeConsecutiveDuplicates(input) {

    var str = input;
    var l ="";
    var res ="";
    console.log("str :" +str);
for(var i= 0;i<str.length;i++)
{
    let char = str[i];
    if(char != l){
        res +=char;
        l = char;
    }
    
}
console.log(res);
return (res);
}
// console.log('abcd' == removeConsecutiveDuplicates('aaaaabbbbbbccccdddd'));
console.log('abdsdsd' == removeConsecutiveDuplicates('abdsdsd'));
console.log('zdadsdeui12' == removeConsecutiveDuplicates('zzdadsdeuui112'));
console.log('iead2s' == removeConsecutiveDuplicates('ieaaaaddd22ss'));




