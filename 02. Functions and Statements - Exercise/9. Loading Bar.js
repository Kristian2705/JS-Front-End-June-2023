function solve(percentage){
    let num = percentage / 10;
    let bar = '%'.repeat(num) + '.'.repeat(10 - num);
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