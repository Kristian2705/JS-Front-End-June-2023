function solve(input){
    const [words, ...strings] = input;

    const wordTracker = {};
    words.split(' ').forEach(word => {
        wordTracker[word] = 0;
    });

    for (const str of strings) {
        if(wordTracker.hasOwnProperty(str)){
            wordTracker[str]++;
        }
    }

    Object.keys(wordTracker).sort((x, y) => wordTracker[y] - wordTracker[x]).forEach(x => {
        console.log(`${x} - ${wordTracker[x]}`);
    })
}

solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']
    )