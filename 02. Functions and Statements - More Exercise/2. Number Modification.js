function solve(num){  
    let numToStr = `${num}`;
    while(CalculateDigitsAvg(numToStr) < 5){
        numToStr += '9';
    }
    console.log(numToStr);
}

function CalculateDigitsAvg(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    return sum / num.length;
}

solve(5835);