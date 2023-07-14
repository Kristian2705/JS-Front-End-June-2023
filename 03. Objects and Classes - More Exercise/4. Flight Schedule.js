function solve(arr){
    const [initialFlights, changes, status] = arr;
    const flights = initialFlights.reduce((acc, curr) => {
        const[sector, ...destination] = curr.split(' ');
        let currObj = {
            sector,
            Destination: destination.join(' '),
            Status: 'none'
        }
        acc.push(currObj);
        return acc;
    }, []);

    changes.forEach(curr => {
        const[sector, status] = curr.split(' ');
        let currObj = flights.find(x => x.sector === sector);
        if(currObj){
            currObj.Status = status;
        }
    });

    const statusToFind = status[0];
    if(statusToFind === "Ready to fly"){
        flights.filter(x => x.Status === 'none').forEach(x => {
            delete x.sector;
            x.Status = statusToFind;
            console.log(x);
        })
    }
    else{
        flights.filter(x => x.Status === statusToFind).forEach(x => {
            delete x.sector;
            console.log(x);
        })
    }
}

solve([['WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas',
'KL5744 Illinois',
'WN678 Pennsylvania'],
['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled', 'SK430 Cancelled'],
['Cancelled']
]
)