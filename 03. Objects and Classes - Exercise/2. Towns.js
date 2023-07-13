function solve(arr){
    for(const el of arr){
        let[town, latitude, longitude] = el.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        const currTown = {
            town,
            latitude,
            longitude
        };
        console.log(currTown);
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);