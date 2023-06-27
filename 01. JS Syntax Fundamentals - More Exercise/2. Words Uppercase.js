function solve(text){
    let words = text.match(/\w+/g);
    console.log(words.join(', ').toUpperCase());
}

solve('Hi, how are you?');