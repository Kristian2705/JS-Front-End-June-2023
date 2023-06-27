function solve(strNum, f, s, t, fo, fi){
    let operations = [f, s, t, fo, fi];
    let num = strNum / 1;
    for (const el of operations) {
        switch(el){
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.8;
                break;
        }
        console.log(num);
    }
}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');