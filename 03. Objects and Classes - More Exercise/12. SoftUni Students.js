function solve(arr){
    let coursesStudents = {};
    const coursesCapacity = arr.reduce((acc, curr) => {
        if(curr.includes(':')){
            const[courseName, capacity] = curr.split(': ');
            if(!acc.hasOwnProperty(courseName)){
                acc[courseName] = 0;
                coursesStudents[courseName] = [];
            }
            acc[courseName] += Number(capacity);
        }
        else{
            const[userCredits, emailCourseName] = curr.split(' with email ');
            let[user, credits] = userCredits.split('[');
            credits = Number(credits.substring(0, credits.length - 1));
            const [email, courseName] = emailCourseName.split(' joins ');
            const currStudent = {
                credits,
                user,
                email
            };
            if(coursesStudents.hasOwnProperty(courseName)){
                if(acc[courseName] > coursesStudents[courseName].length){
                    coursesStudents[courseName].push(currStudent);
                }
            }
        }
        return acc;
    }, {});

    Object.keys(coursesCapacity).sort((a, b) => coursesStudents[b].length - coursesStudents[a].length).forEach(course => {
        console.log(`${course}: ${coursesCapacity[course] - coursesStudents[course].length} places left`);
        coursesStudents[course].sort((a, b) => b["credits"] - a["credits"]).forEach(student => {
            console.log(`--- ${student["credits"]}: ${student["user"]}, ${student["email"]}`);
        })
    });
}

solve(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 
'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics',
'user13[50] with email user13@user.com joins JSCore',
'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced',
'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2',
'user11[3] with email user11@user.com joins JavaBasics',
'user45[105] with email user45@user.com joins JSCore',
'user007[20] with email user007@user.com joins JSCore',
'user700[29] with email user700@user.com joins JSCore',
'user900[88] with email user900@user.com joins JSCore']);