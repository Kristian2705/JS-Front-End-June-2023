function solve(arr){
    const info = arr.reduce((acc, curr) => {
        const [name, address] = curr.split(':');
        acc[name] = address;
        return acc;
    }, {});

    Object.keys(info).sort().forEach(key => {
        console.log(`${key} -> ${info[key]}`);
    });
}

solve(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd'])