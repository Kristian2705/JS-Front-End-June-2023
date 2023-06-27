function solve(text){
    let pattern = /#[a-zA-Z]+\b/g;
    let words = text.match(pattern);
    for (const word of words) {
        console.log(word.substring(1));
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');