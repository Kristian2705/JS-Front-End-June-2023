function solve(text, word){
    let splitText = text.split(' ');
    let count = 0;
    for(let i = 0; i < splitText.length; i++){
        if(splitText[i] === word){
            count++;
        }
    }
    console.log(count);
}

solve('This is a word and it also is a sentence', 'is');