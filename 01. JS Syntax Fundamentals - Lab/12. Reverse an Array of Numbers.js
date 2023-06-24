function solve(n, input){
    let newArr = [];
    for(let i = 0; i < n; i++){
        newArr.push(input[i]);
    }
    console.log(newArr.reverse().join(' '));
}

solve(2, [30, 10, 20]);