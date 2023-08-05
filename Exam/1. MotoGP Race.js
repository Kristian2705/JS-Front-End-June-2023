function solve(arr){
    const n = arr.shift();
    const racersTokens = [];
    for (let i = 0; i < n; i++) {
        racersTokens.push(arr.shift());
    }
    const racers = [];
    racersTokens.forEach(cmd => {
        const [name, fuelCap, pos] = cmd.split('|');
        racers.push({
            name,
            fuelCap: Number(fuelCap),
            pos: Number(pos)
        })
    });

    let currCommmand = arr.shift();
    while(currCommmand !== 'Finish'){
        const tokens = currCommmand.split(' - ');
        const action = tokens.shift();
        switch(action){
            case 'StopForFuel':
                const [name, minFuel, changedPos] = tokens;
                const currRacer = racers.find(x => x.name === name);
                if(currRacer.fuelCap < minFuel){
                    currRacer.pos = changedPos;
                    console.log(`${name} stopped to refuel but lost his position, now he is ${changedPos}.`);
                }
                else{
                    console.log(`${name} does not need to stop for fuel!`);
                }
                break;
            case 'Overtaking':
                const [name1, name2] = tokens;
                const firstRacer = racers.find(x => x.name === name1);
                const secondRacer = racers.find(x => x.name === name2);
                const indexOfFirstRacer = racers.indexOf(firstRacer);
                const indexOfSecondRacer = racers.indexOf(secondRacer);
                if(indexOfFirstRacer < indexOfSecondRacer && firstRacer.pos < secondRacer.pos){
                    let temp = racers[indexOfFirstRacer].pos;
                    racers[indexOfFirstRacer].pos = racers[indexOfSecondRacer].pos;
                    racers[indexOfSecondRacer].pos = temp;
                    console.log(`${firstRacer.name} overtook ${secondRacer.name}!`);
                }
                break;
            case 'EngineFail':
                const [nameOfRacer, laps] = tokens;
                const racerToFind = racers.find(x => x.name === nameOfRacer);
                const indexOfRacer = racers.indexOf(racerToFind);
                racers.splice(indexOfRacer, 1);
                console.log(`${nameOfRacer} is out of the race because of a technical issue, ${laps} laps before the finish.`);
                break;
        }
        currCommmand = arr.shift();
    }
    racers.forEach(r => {
        console.log(r.name);
        console.log(`  Final position: ${r.pos}`);
    })
}

solve((["4",
"Valentino Rossi|100|1",
"Marc Marquez|90|3",
"Jorge Lorenzo|80|4",
"Johann Zarco|80|2",
"StopForFuel - Johann Zarco - 90 - 5",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])
);