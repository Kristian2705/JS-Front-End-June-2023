function subtract(num1, num2, num3){
    function sum(num1, num2){
        return num1 + num2;
    }
    return sum(num1, num2) - num3;
}

console.log(subtract(23, 6, 10));