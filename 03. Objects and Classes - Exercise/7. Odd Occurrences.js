function solve(input){
    const els = {};

    for (const el of input.split(' ')) {
        if(!els.hasOwnProperty(el.toLowerCase())){
            els[el.toLowerCase()] = 0;
        }
        els[el.toLowerCase()]++;
    }

    const res = Object.keys(els).filter(x => els[x] % 2 !== 0).reduce((acc, curr) => {
        acc += `${curr} `;
        return acc;
    }, '');
    console.log(res);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');