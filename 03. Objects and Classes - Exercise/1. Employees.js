function solve(arr){
    const employees = arr.reduce((acc, name) => {
        acc[name] = name.length;
        return acc;
    }, {});

    console.log(employees);

    Object.entries(employees).forEach(([employeeName, personalNum]) => {
        console.log(`Name: ${employeeName} -- Personal Number: ${personalNum}`);
    })
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]);