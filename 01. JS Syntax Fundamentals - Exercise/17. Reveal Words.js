function solve(words, text){
    let wordsArr = words.split(', ');
    let censored = text.split(' ').filter(el => el.includes('*'));
    for (const el of censored) {
        let currLength = el.length;
        let wordToReplaceWith = wordsArr.find(x => x.length === currLength);
        text = text.replace(el, wordToReplaceWith);
    }
    console.log(text);
}

solve('great, learning',
'softuni is ***** place for ******** new programming languages');