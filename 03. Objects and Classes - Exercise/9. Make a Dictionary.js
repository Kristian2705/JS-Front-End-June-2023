function solve(arr){
    const dictionary = arr.reduce((acc, curr) => {
        const info = JSON.parse(curr);
        acc[Object.keys(info)[0]] = Object.values(info)[0];
        return acc;
    }, {});

    Object.entries(dictionary).sort().forEach(([term, definition]) => {
        console.log(`Term: ${term} => Definition: ${definition}`);
    })
}

solve(['{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}','{"Cake":"An item of soft sweetfood made from a mixture offlour, fat, eggs, sugar, andother ingredients, baked andsometimes iced or decorated."}']);