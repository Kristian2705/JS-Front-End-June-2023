function solve(start, end){
    let sum = 0;
    let numStr = '';
    for(let i = start; i<=end; i++){
        sum += i;
        numStr += `${i} `;
    }
    console.log(numStr.trimEnd());
    console.log(`Sum: ${sum}`);
}

solve(5, 10);