function solve(num){
    let numToStr = `${num}`;
    let even = 0;
    let odd = 0;
    for (let i = 0; i < numToStr.length; i++) {
        let currDigit = Number(numToStr[i]);
        if(currDigit % 2 === 0){
            even += currDigit;
        }
        else{
            odd += currDigit;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}

solve(3495892137259234)