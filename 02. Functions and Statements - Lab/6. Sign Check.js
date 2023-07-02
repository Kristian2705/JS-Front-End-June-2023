function solve(num1, num2, num3){
    let arr = [num1, num2, num3];
    if(arr.filter(x => x < 0).length == 1 || arr.filter(x => x < 0).length == 3){
        console.log('Negative');
    }
    else{
        console.log('Positive');
    }
}

solve(-1, -2, -3);