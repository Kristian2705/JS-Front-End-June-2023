function solve(num1, num2){
    console.log((Factorial(num1) / Factorial(num2)).toFixed(2));
}

function Factorial(num){
    if(num <= 1){
        return 1;
    }
    return num * Factorial(num - 1);
}

solve(6, 2);