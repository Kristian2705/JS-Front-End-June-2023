function solve(input){
    if(typeof input !== 'number'){
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`);
    }
    else{
        console.log((Math.pow(input, 2) * Math.PI).toFixed(2));
    }
}

solve(5);
solve('doge')