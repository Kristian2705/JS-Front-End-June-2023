function solve(speed, area){
    let message = '';
    if(area === 'motorway'){
        if(speed <= 130){
            message = `Driving ${speed} km/h in a ${130} zone`;
        }
        else{
            message = `The speed is ${speed - 130} km/h faster than the allowed speed of ${130} - `;
            if(speed - 130 <= 20){
                message += 'speeding';
            }
            else if(speed - 130 <= 40){
                message += 'excessive speeding';
            }
            else{
                message += 'reckless driving';
            }
        }
    }
    else if(area === 'interstate'){
        if(speed <= 90){
            message = `Driving ${speed} km/h in a ${90} zone`;
        }
        else{
            message = `The speed is ${speed - 90} km/h faster than the allowed speed of ${90} - `;
            if(speed - 90 <= 20){
                message += 'speeding';
            }
            else if(speed - 90 <= 40){
                message += 'excessive speeding';
            }
            else{
                message += 'reckless driving';
            }
        }
    }
    else if(area === 'city'){
        if(speed <= 50){
            message = `Driving ${speed} km/h in a ${50} zone`;
        }
        else{
            message = `The speed is ${speed - 50} km/h faster than the allowed speed of ${50} - `;
            if(speed - 50 <= 20){
                message += 'speeding';
            }
            else if(speed - 50 <= 40){
                message += 'excessive speeding';
            }
            else{
                message += 'reckless driving';
            }
        }
    }
    else{
        if(speed <= 20){
            message = `Driving ${speed} km/h in a ${20} zone`;
        }
        else{
            message = `The speed is ${speed - 20} km/h faster than the allowed speed of ${20} - `;
            if(speed - 20 <= 20){
                message += 'speeding';
            }
            else if(speed - 20 <= 40){
                message += 'excessive speeding';
            }
            else{
                message += 'reckless driving';
            }
        }
    }
    console.log(message);
}

solve(200, 'motorway');