function solve(yield){
    let extracted = 0;
    let days = 0;
    while(yield >= 100){
        extracted += yield;
        if(extracted >= 26){
            extracted -= 26;
        }
        yield -= 10;
        days++;
    }
    if(extracted >= 26){
        extracted -= 26;
    }
    console.log(days);
    console.log(extracted);
}

solve(111);