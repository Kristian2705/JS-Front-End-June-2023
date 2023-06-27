function solve(word, text){
    let caseInsWord = word.toLowerCase();
    let textInsArr = text.toLowerCase().split(' ');
    console.log(textInsArr.includes(caseInsWord) ? word : `${word} not found!`);
}

solve('javascript', 'JavaScript is the best programming language')