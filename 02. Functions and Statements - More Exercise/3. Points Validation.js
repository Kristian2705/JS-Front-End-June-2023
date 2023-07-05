function solve(points){
    let [x1, y1, x2, y2] = points;
    console.log(IsDistanceValid(x1, y1, 0, 0));
    console.log(IsDistanceValid(x2, y2, 0, 0));
    console.log(IsDistanceValid(x1, y1, x2, y2));
    
    function GetDistance(x1, y1, x2, y2){
        return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    }
    
    function IsDistanceValid(x1, y1, x2, y2){
        const distance = GetDistance(x1, y1, x2, y2);
        const isValid = Number.isInteger(distance);
        const status = isValid ? 'valid' : 'invalid';
        
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${status}`;
    }
}

solve([2, 1, 1, 1]);