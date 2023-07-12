function solve(obj){
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`${key} -> ${value}`);
    })
}

solve({
    name: "Sofia",
    area: 492,
    population: 12345678,
    country: "Bulgaria",
    postCode: "1000"
})