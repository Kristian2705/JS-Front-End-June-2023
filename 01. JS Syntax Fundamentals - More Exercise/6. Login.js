function solve(data){
    let username = data[0];
    data.shift()
    let passwords = data;
    let tries = 0;
    for (const password of passwords) {
        let splitPassword = password.split("");
        let reversePassword = splitPassword.reverse().join("");
        if(reversePassword === username){
            console.log(`User ${username} logged in.`);
            return;
        }
        else{
            tries++;
            if(tries === 4){
                console.log(`User ${username} blocked!`);
                return;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}

solve(['Acer','login','go','let me in','recA']);