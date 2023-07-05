function solve(arr){
    for (const el of arr) {
        let isPal = true;
        let numToStr = `${el}`;
        let currLength = numToStr.length;
        for (let i = 0; i < currLength; i++) {
            if(numToStr[i] !== numToStr[currLength - 1 - i]){
                isPal = false;
                console.log(isPal);
                break;
            }
        }
        if(isPal){
            console.log(isPal);
        }
    }
}

solve([32,2,232,1010]);