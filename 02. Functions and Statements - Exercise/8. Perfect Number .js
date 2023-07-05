function solve(num){
    let sum = 0;
    let bound = Math.ceil(num / 2);
    for(let i = 1; i <= bound; i++){
        if(num % i !== 0){
            continue;
        }
        sum += i;
    }
    if(sum === num){
        console.log("We have a perfect number!");
    }
    else{
        console.log("It's not so perfect.");
    }
}

solve(1236498);