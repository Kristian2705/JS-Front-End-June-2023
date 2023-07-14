function solve(arr){
    const res = new Set();
    arr.forEach(curr => {
        const currArr = JSON.parse(curr).sort((a, b) => b - a);
        res.add(JSON.stringify(currArr));
    });

    const resAsArr = Array.from(res);

    resAsArr.map(x => JSON.parse(x).sort((a, b) => b - a))
        .sort((x, y) => x.length - y.length)
        .forEach(curr => {
            console.log(`[${curr.join(', ')}]`);
        });
}

solve(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]

);