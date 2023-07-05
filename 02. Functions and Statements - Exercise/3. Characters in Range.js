function solve(ch1, ch2){
    let start = (ch1.charCodeAt(0) < ch2.charCodeAt(0) ? ch1 : ch2).charCodeAt(0);
    let end = 0;
    if(start === ch1.charCodeAt(0)){
        end = ch2.charCodeAt(0);
    }
    else{
        end = ch1.charCodeAt(0);
    }
    let res = '';
    for(let i = start + 1; i < end; i++){
        res += String.fromCharCode(i) + ' ';
    }
    console.log(res.trimEnd());
}

solve('C', '#');