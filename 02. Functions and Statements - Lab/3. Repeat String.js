function solve(str, n){
    let newStr = '';
    for (let i = 0; i < n; i++) {
        newStr += str;
    }
    return newStr;
}

console.log(solve('abc', 3));