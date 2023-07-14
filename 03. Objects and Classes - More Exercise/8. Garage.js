function solve(arr){
    const garages = arr.reduce((acc, curr) => {
        const [number, carInfo] = curr.split(' - ');
        if(!acc.hasOwnProperty(number)){
            acc[number] = [];
        }
        const carInfoArr = carInfo.split(', ');
        const car = {};
        carInfoArr.forEach(info => {
            const[key, value] = info.split(': ');
            car[key] = value;
        })
        acc[number].push(car);
        return acc;
    }, {});

    Object.keys(garages).forEach(key => {
        console.log(`Garage № ${key}`);
        garages[key].forEach(car => {
            console.log(`--- ${Object.entries(car).map(([key1, value]) => (`${key1} - ${value}`)).join(', ')}`);
        });
    })
}

solve(['1 - color: green, fuel type: petrol',
'1 - color: dark red, manufacture: WV',
'2 - fuel type: diesel',
'3 - color: dark blue, fuel type: petrol']
)