function solve(arr){
    const appointments = arr.reduce((acc, curr) => {
        const [day, name] = curr.split(" ");
        if(acc.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }
        else{
            acc[day] = name;
            console.log(`Scheduled for ${day}`);
        }

        return acc;
    }, {})

    Object.keys(appointments).forEach(key => {
        console.log(`${key} -> ${appointments[key]}`);
    });
}

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
)