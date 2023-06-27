function solve(arr, times){
    for(let i = 1; i <= times; i++){
        let shift = arr.shift();
        arr.push(shift);
    }
    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2 );