function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice){
    let total = 0;
    let shieldBrokenTimes = 0;
    for(let i = 1; i <= lostFights; i++){
        if(i % 2 === 0){
            total += helmetPrice;
        }
        if(i % 3 === 0){
            total += swordPrice;
        }
        if(i % 6 === 0){
            total += shieldPrice;
            shieldBrokenTimes++;
        }
        if(shieldBrokenTimes % 2 === 0 && shieldBrokenTimes !== 0){
            total += armourPrice;
            shieldBrokenTimes = 0;
        }
    }
    console.log(`Gladiator expenses: ${total.toFixed(2)} aureus`);
}

solve(7, 2, 3, 4, 5);