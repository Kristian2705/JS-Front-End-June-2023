function solve(num){
    let currNum = num;
    let sum = 0;
    while(currNum !== 0){
        let num1 = currNum % 10;
        sum += num1;
        currNum /= 10;
        currNum = Math.floor(currNum);
    }
    console.log(sum);
}

solve(245678);