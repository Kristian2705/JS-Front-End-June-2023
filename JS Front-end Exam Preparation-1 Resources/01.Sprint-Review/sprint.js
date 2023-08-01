function solve(arr){
    const n = arr.shift();
    let assignees = {};
    for (let i = 0; i < n; i++) {
        const [assignee, taskId, title, status, estPoints] = arr[i].split(':');
        const currTask = {
            taskId,
            title,
            status,
            estPoints: Number(estPoints)
        }
        if(!assignees.hasOwnProperty(assignee)){
            assignees[assignee] = [];
        }
        assignees[assignee].push(currTask);
    }
    for (let i = 0; i < n; i++) {
        arr.shift();
    }
    arr.forEach(curr => {
        const [action, ...data] = curr.split(':');
        if(action === 'Add New'){
            const [assignee, taskId, title, status, estPoints] = data;
            if(assignees.hasOwnProperty(assignee)){
                const currTask = {
                    taskId,
                    title,
                    status,
                    estPoints: Number(estPoints)
                }
                assignees[assignee].push(currTask);
            }
            else{
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }
        else if(action === 'Change Status'){
            const [assignee, taskId, newStatus] = data;
            if(assignees.hasOwnProperty(assignee)){
                const currTask = assignees[assignee].find(task => task.taskId === taskId);
                if(currTask){
                    currTask.status = newStatus;
                }
                else{
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                }
            }
            else{
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }
        else{
            const [assignee, index] = data;
            if(assignees.hasOwnProperty(assignee)){
                if(index < 0 || index >= assignees[assignee].length){
                    console.log('Index is out of range!');
                }
                else{
                    assignees[assignee].splice(index, 1);
                }
            }
            else{
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }
        }
    })

    let toDoPts = 0;
    let inProgressPts = 0;
    let codeReviewPts = 0;
    let donePts = 0;
    Object.values(assignees).forEach(tasks => {
        tasks.forEach(task => {
            switch(task.status){
                case 'ToDo':
                    toDoPts += task.estPoints;
                    break;
                case 'In Progress':
                    inProgressPts += task.estPoints;
                    break;
                case 'Code Review':
                    codeReviewPts += task.estPoints;
                    break;
                case 'Done':
                    donePts += task.estPoints;
                    break;
            }
        });
    });

    console.log(`ToDo: ${toDoPts}pts`);
    console.log(`In Progress: ${inProgressPts}pts`);
    console.log(`Code Review: ${codeReviewPts}pts`);
    console.log(`Done Points: ${donePts}pts`);

    if(donePts >= toDoPts + inProgressPts + codeReviewPts){
        console.log('Sprint was successful!');
    }
    else{
        console.log('Sprint was unsuccessful...')
    }
}

solve(['4', 'Kiril:BOP-1213:Fix Typo:Done:1',
 'Peter:BOP-1214:New Products Page:In Progress:2',
 'Mariya:BOP-1215:Setup Routing:ToDo:8',
 'Georgi:BOP-1216:Add Business Card:Code Review:3',
 'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
 'Change Status:Georgi:BOP-1216:Done',
 'Change Status:Will:BOP-1212:In Progress',
 'Remove Task:Georgi:3',
 'Change Status:Mariya:BOP-1215:Done',
 ]
)