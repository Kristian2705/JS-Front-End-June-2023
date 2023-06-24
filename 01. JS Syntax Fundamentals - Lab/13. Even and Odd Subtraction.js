function solve(input){
    let evenSum = 0;
    let oddSum = 0;
    input.forEach(element => {
        if(element % 2 === 0){
            evenSum += element;
        }
        else{
            oddSum += element;
        }
    });
    console.log(evenSum - oddSum);
}

solve([10, 20 , 31])