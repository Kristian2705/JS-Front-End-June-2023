function solve(arr){
    const register = {};
    for (const student of arr) {
        const info = student.split(', ');
        const name = info[0].split(': ')[1];
        let grade = Number(info[1].split(': ')[1]) + 1;
        const score = info[2].split(': ')[1];
        if(score < 3){
            continue;
        }
        if(!register.hasOwnProperty(grade)){
            register[grade] = {};
            register[grade]["List of students"] = [];
            register[grade]["Average annual score from last year"] = 0;
        }
        register[grade]["List of students"].push(name);
        register[grade]["Average annual score from last year"] += Number(score);
    }

    Object.keys(register).forEach(key => {
        console.log(`${key} Grade`);
        console.log(`${Object.keys(register[key])[0]}: ${register[key]["List of students"].join(', ')}`);
        console.log(`${Object.keys(register[key])[1]}: ${(register[key]["Average annual score from last year"] / register[key]["List of students"].length).toFixed(2)}`);
        console.log('');
    })
}

solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"])