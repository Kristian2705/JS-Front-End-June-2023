function solve(arr){
    const commandExecutor = {
        'Retake': retakeCmd,
        'Trouble': troubleCmd,
        'Rage': rageCmd,
        'Miracle': miracleCmd
    }
    const [horsesAsStr, ...commands] = arr;
    let horses = horsesAsStr.split('|');
    let hasFinished = false;
    commands.forEach(command => {
        if(hasFinished){
            return;
        }
        if(command === 'Finish'){
            console.log(horses.join('->'));
            console.log(`The winner is: ${horses[horses.length - 1]}`);
            hasFinished = true;
        }
        else{
            const [action, ...tokens] = command.split(' ');
            commandExecutor[action](...tokens);
        }
    });

    function retakeCmd(overtaking, overtaken){
        const indOfOvertaking = horses.indexOf(overtaking);
        const indOfOvertaken = horses.indexOf(overtaken);
        if(indOfOvertaking < indOfOvertaken){
            let temp = horses[indOfOvertaking];
            horses[indOfOvertaking] = horses[indOfOvertaken];
            horses[indOfOvertaken] = temp;
            console.log(`${overtaking} retakes ${overtaken}.`);
        }
    }

    function troubleCmd(horseName){
        const indOfHorse = horses.indexOf(horseName);
        if(indOfHorse > 0){
            let temp = horses[indOfHorse];
            horses[indOfHorse] = horses[indOfHorse - 1];
            horses[indOfHorse - 1] = temp;
            console.log(`Trouble for ${horseName} - drops one position.`);
        }
    }

    function rageCmd(horseName){
        const indOfHorse = horses.indexOf(horseName);
        if(indOfHorse === horses.length - 1){
            console.log(`${horseName} rages 2 positions ahead.`);
            return;
        }
        if(indOfHorse === horses.length - 2){
            let temp = horses[indOfHorse];
            horses[indOfHorse] = horses[horses.length - 1];
            horses[horses.length - 1] = temp;
            console.log(`${horseName} rages 2 positions ahead.`);
            return;
        }
        let temp = horses[indOfHorse];
        horses[indOfHorse] = horses[indOfHorse + 1];
        horses[indOfHorse + 1] = horses[indOfHorse + 2];
        horses[indOfHorse + 2] = temp;
        console.log(`${horseName} rages 2 positions ahead.`);
    }

    function miracleCmd(){
        const lastHorse = horses.shift();
        horses.push(lastHorse);
        console.log(`What a miracle - ${lastHorse} becomes first.`);
    }
}

solve((['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])



);