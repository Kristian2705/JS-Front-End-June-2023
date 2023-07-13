function solve(arr){
    const parking = [];
    for (const curr of arr) {
        const [direction, number] = curr.split(', ');
        if(direction === "IN"){
            if(!parking.includes(number)){
                parking.push(number);
            }
        }
        else if(direction === "OUT"){
            if(parking.includes(number)){
                parking.splice(parking.indexOf(number), 1);
            }
        }
    }

    console.log(parking.length > 0 ? parking.sort((a, b) => a.localeCompare(b)).join('\n') : 'Parking Lot is Empty');
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

)