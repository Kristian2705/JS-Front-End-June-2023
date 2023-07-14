function solve(arr){
    const catalogue = arr.reduce((acc, curr) => {
        const [name, price] = curr.split(' : ');
        acc[name] = price;
        return acc;
    }, {});

    let res = [];
    Object.keys(catalogue).sort((a, b) => a.localeCompare(b)).forEach(key => {
        res.push(`${key}: ${catalogue[key]}`);
    });

    let currLetter = '';
    res.forEach(el => {
        if(el[0] !== currLetter){
            currLetter = el[0];
            console.log(currLetter);
        }
        console.log(`  ${el}`);
    })
}

solve([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
    ]
    
    );