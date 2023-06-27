function solve(miningData){
    let gold = 0;
    let bitcoins = 0;
    let levs = 0;
    let day = 0;
    for (let i = 1; i <= miningData.length; i++) {
        gold = miningData[i - 1];
        if(i % 3 === 0){
            gold *= 0.7;   
        }
        levs += gold * 67.51;
        while(levs >= 11949.16){
            levs -= 11949.16;
            bitcoins++;
            if(bitcoins === 1){
                day = i;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if(day !== 0){
        console.log(`Day of the first purchased bitcoin: ${day}`);
    }
    console.log(`Left money: ${levs.toFixed(2)} lv.`);
}

solve([3124.15, 504.212, 2511.124]);