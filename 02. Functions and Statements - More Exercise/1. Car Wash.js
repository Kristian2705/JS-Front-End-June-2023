let commandsOption = {
    soap: (x) => x + 10,
    water: (x) => x + x * 0.2,
    vacuumcleaner: (x) => x + x * 0.25,
    mud: (x) => x * 0.9
}

function solve(commands){
    let value = 0;
    for (let i = 0; i < commands.length; i++) {
        commands[i] = commands[i].replace(/\s+/g, '');
        value = commandsOption[commands[i]](value);
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}

solve(["soap", "water", "mud", "mud", "water", "mud",
"vacuum cleaner"]
);