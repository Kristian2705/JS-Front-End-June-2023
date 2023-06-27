function solve(text){
    let pattern = /[A-Z][a-z0-9]*/g;
    let wordsArr = text.match(pattern);
    console.log(wordsArr.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');