function solve(num){
    let currNum = num;
    let sum = 0;
    let numLength = 0;
    while(currNum !== 0){
        let num1 = currNum % 10;
        sum += num1;
        currNum /= 10;
        currNum = Math.floor(currNum);
        numLength++;
    }
    if(num === 0){
        console.log(true);
    }
    else{
        if(sum / numLength !== num % 10){
            console.log(false);
        }
        else{
            console.log(true);
        }
    }
    console.log(sum);
}

solve(2222222);