function removeconsecutive(str){
    for(var i = 0 ;i<str.length;i++){
        let char = str[i];
        for(var j = 1 ; j < str.length ; j++){
        if(char == str[j])
        {
            str.replace(str[j],' ');
        }
    }
}

console.log(str);
}

removeconsecutive("qqqwwewewe");