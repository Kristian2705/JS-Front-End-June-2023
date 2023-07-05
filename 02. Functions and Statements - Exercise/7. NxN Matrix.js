function solve(n){
    for(let i = 0; i < n; i++){
        let inner = [];
        for(let j = 0; j < n; j++){
            inner.push(n);
        }
        console.log(inner.join(' '));
    }
}

solve(7);