function solve(people, type, day){
    let price = 0;
    if(type === 'Students'){
        switch(day){
            case 'Friday':
                price = 8.45;
                break;
            case 'Saturday':
                price = 9.80;
                break;
            case 'Sunday':
                price = 10.46;
                break;
        }
        if(people >= 30){
            price *= 0.85;
        }
        price *= people;
    }
    else if(type === 'Business'){
        switch(day){
            case 'Friday':
                price = 10.90;
                break;
            case 'Saturday':
                price = 15.60;
                break;
            case 'Sunday':
                price = 16;
                break;
        }
        let singlePersonPrice = price;
        price *= people;
        if(people >= 100){
            price -= 10 * singlePersonPrice;
        }
    }
    else{
        switch(day){
            case 'Friday':
                price = 15;
                break;
            case 'Saturday':
                price = 20;
                break;
            case 'Sunday':
                price = 22.50;
                break;
        }
        if(people >= 10 && people <= 20){
            price *= 0.95;
        }
        price *= people;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");