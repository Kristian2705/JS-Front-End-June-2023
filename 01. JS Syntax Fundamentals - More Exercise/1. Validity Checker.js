function solve(x1, y1, x2, y2){
    let distances = [];
    distances.push(Math.sqrt((x1)**2 + (y1)**2));
    distances.push(Math.sqrt((x2)**2 + (y2)**2));
    distances.push(Math.sqrt((x2-x1)**2 + (y2-y1)**2));
    let counter = 1;
    for (const distance of distances) {
        if(counter === 1){
            if(Number.isInteger(distance)){
                console.log(`{${x1}, ${y1}} to {${0}, ${0}} is valid`);
            }
            else{
                console.log(`{${x1}, ${y1}} to {${0}, ${0}} is invalid`);
            }   
        }
        else if(counter === 2){
            if(Number.isInteger(distance)){
                console.log(`{${x2}, ${y2}} to {${0}, ${0}} is valid`);
            }
            else{
                console.log(`{${x2}, ${y2}} to {${0}, ${0}} is invalid`);
            }
        }
        else{
            if(Number.isInteger(distance)){
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
            }
            else{
                console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
            }   
        }
        counter++;
    }
}

solve(3, 0, 0, 4);