function solve(arr){
    let count = 1;
    arr.sort(function(a, b) {
        return a.localeCompare(b);
    }).forEach(element => {
        console.log(`${count++}.${element}`); 
    });
}

solve(["John",
"Bob",
"Christina",
"Ema"]
);