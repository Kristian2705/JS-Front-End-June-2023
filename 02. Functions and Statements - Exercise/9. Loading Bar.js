function solve(percentage){
    let num = percentage / 10;
    let bar = '';
    for(let i = 0; i < num; i++){
        bar += '%';
    }
    for(let i = num + 1; i <= 10; i++){
        bar += '.';
    }
    if(num !== 10){
        console.log(`${percentage}% [${bar}]`);
        console.log('Still loading...');
    }
    else{
        console.log('100% Complete!')
        console.log(`[${bar}]`);
    }
}

solve(100);