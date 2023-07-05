function solve(n){
    let starsCount = 4;
    let shouldIncrease = false;
    let helix = 'ATCGTTAGGG';
    let helixIndex = 0;
    for(let i = 1; i <= n; i++){
        let minusCount = 6 - starsCount;
        let first = helix[helixIndex];
        let second = helix[helixIndex + 1];
        let currRow = '*'.repeat(starsCount / 2) + '-'.repeat(minusCount) + '*'.repeat(starsCount / 2); 
        let indexOfFirstMinus = currRow.indexOf('-');
        let indexOfLastMinus = currRow.lastIndexOf('-');
        currRow = currRow.slice(0, indexOfFirstMinus) + first + currRow.slice(indexOfFirstMinus + 1, indexOfLastMinus) + second + currRow.slice(indexOfLastMinus + 1, currRow.length);
        console.log(currRow);
        if(starsCount === 0){
            shouldIncrease = true;
        }
        if(starsCount === 4){
            shouldIncrease = false;
        }
        if(shouldIncrease){
            starsCount += 2;
        }
        else{
            starsCount -= 2;
        }
        helixIndex += 2;
        if(helixIndex >= 9){
            helixIndex = 0;
        }
    }
}

solve(4);