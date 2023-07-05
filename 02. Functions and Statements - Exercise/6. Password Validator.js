function CheckLength(password){
    let l = password.length;
    return l >= 6 && l <= 10;
}

function CheckForLettersAndDigits(password){
    return password.match(/^[a-zA-Z0-9]*$/g);
}

function CheckForAtLeastTwoDigits(password){
    const digits = password.match(/\d/g);
    if(digits !== null){
        return digits.length >= 2;
    }
}

function solve(password){
    let errors = [];
    if(!CheckLength(password)){
        errors.push('Password must be between 6 and 10 characters');
    }
    if(!CheckForLettersAndDigits(password)){
        errors.push('Password must consist only of letters and digits');
    }
    if(!CheckForAtLeastTwoDigits(password)){
        errors.push('Password must have at least 2 digits');
    }
    if(errors.length === 0){
        console.log('Password is valid');
    }
    else{
        console.log(errors.join('\n'));
    }
}

solve('Pa$s$s');