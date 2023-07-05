function solve(arr){
    let [desiredValue, ...crystals] = arr;
    for (const crystal of crystals) {
        proccess(desiredValue, crystal);
        console.log(`Finished crystal ${desiredValue} microns`);
    }
}

function proccess(desiredValue, crystalValue){
    const operationsArr = ['Cut', 'Lap', 'Grind', 'Etch'];
    console.log(`Processing chunk ${crystalValue} microns`);
    while(crystalValue >= desiredValue - 1){
        if(crystalValue + 1 === desiredValue){
            crystalValue = operations['Xray'](crystalValue);
            console.log('X-ray x1');
            break;
        }
        let times = 0;
        let currOperation = operationsArr.shift();
        let cleanOperation = currOperation.replace('-', '').replace(/\s+/g, ''); 
        while(operations[cleanOperation](crystalValue) >= desiredValue - 1){
            crystalValue = operations[cleanOperation](crystalValue);
            times++;
        }
        if(times === 0){
            continue;
        }
        console.log(`${currOperation} x${times}`);
        crystalValue = operations['Transportingandwashing'](crystalValue);
        console.log('Transporting and washing');
        if(crystalValue === desiredValue){
            break;
        }
    }
}

let operations = {
    Cut: x => x / 4,
    Lap: x => x * 0.8,
    Grind: x => x - 20,
    Etch: x => x - 2,
    Xray: x => x + 1,
    Transportingandwashing: x => Math.floor(x) 
}

solve([1375, 50000]);