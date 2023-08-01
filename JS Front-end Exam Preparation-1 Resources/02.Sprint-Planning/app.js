window.addEventListener('load', solve);

function solve() {
    let totalPts = 0;
    let counter = 0;
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const label = document.getElementById('label');
    const points = document.getElementById('points');
    const assignee = document.getElementById('assignee');
    const createBtn = document.getElementById('create-task-btn');
    createBtn.addEventListener('click', addArticle);
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    const hiddenId = document.getElementById('task-id');

    function addArticle(){
        if(title.value !== '' && description.value !== '' && label.value !== '' && points.value !== '' && assignee.value !== ''){
            const article = document.createElement('article');
            article.classList = 'task-card';
            article.id = `task-${++counter}`;

            const labelDiv = document.createElement('div');
            labelDiv.classList.add('task-card-label');
            if(label.value === 'Feature'){
                labelDiv.classList.add('feature');
                labelDiv.innerHTML = `${label.value} &#8865;`;
            }
            else if(label.value === 'Low Priority Bug'){
                labelDiv.classList.add('low-priority');
                labelDiv.innerHTML = `${label.value} &#9737;`;
            }
            else if(label.value === 'High Priority Bug'){
                labelDiv.classList.add('high-priority');
                labelDiv.innerHTML = `${label.value} &#9888;`;
            }

            const h3 = document.createElement('h3');
            h3.classList = 'task-card-title';
            h3.textContent = title.value;

            const p = document.createElement('p');
            p.classList = 'task-card-description';
            p.textContent = description.value;

            const pointsDiv = document.createElement('div');
            pointsDiv.classList = 'task-card-points';
            pointsDiv.textContent = `Estimated at ${points.value} pts`;

            const assigneeDiv = document.createElement('div');
            assigneeDiv.classList = 'task-card-assignee';
            assigneeDiv.textContent = `Assigned to: ${assignee.value}`;

            const actionsDiv = document.createElement('div');
            actionsDiv.classList = 'task-card-actions';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', e => loadForm(e));

            totalPts += Number(points.value);
            document.getElementById('total-sprint-points').textContent = `Total Points ${totalPts}pts`;

            actionsDiv.appendChild(deleteBtn);
            article.appendChild(labelDiv);
            article.appendChild(h3);
            article.appendChild(p);
            article.appendChild(pointsDiv);
            article.appendChild(assigneeDiv);
            article.appendChild(actionsDiv);
            document.getElementById('tasks-section').appendChild(article);
            title.value = '';
            description.value = '';
            label.value = '';
            points.value = '';
            assignee.value = '';
            hiddenId.value = '';
        }
    }

    function loadForm(e){
        title.value = e.currentTarget.parentElement.parentElement.querySelector('.task-card-title').textContent;
        description.value = e.currentTarget.parentElement.parentElement.querySelector('.task-card-description').textContent;
        const labelV = e.currentTarget.parentElement.parentElement.querySelector('.task-card-label').textContent.split(' ');
        labelV.pop();
        label.value = labelV.join(' ');
        points.value = e.currentTarget.parentElement.parentElement.querySelector('.task-card-points').textContent.split(' ')[2];
        assignee.value = e.currentTarget.parentElement.parentElement.querySelector('.task-card-assignee').textContent.split(': ')[1];
        createBtn.disabled = true;
        deleteTaskBtn.disabled = false;
        hiddenId.value = e.currentTarget.parentElement.parentElement.id;
        title.disabled = true;
        description.disabled = true;
        label.disabled = true;
        points.disabled = true;
        assignee.disabled = true;
        deleteTaskBtn.addEventListener('click', deleteTask);
    }

    function deleteTask(){
        document.getElementById('tasks-section').removeChild(document.getElementById(hiddenId.value));
        totalPts -= Number(points.value);
        document.getElementById('total-sprint-points').textContent = `Total Points ${totalPts}pts`;
        title.disabled = false;
        description.disabled = false;
        label.disabled = false;
        points.disabled = false;
        assignee.disabled = false;
        title.value = '';
        description.value = '';
        label.value = '';
        points.value = '';
        assignee.value = '';
        hiddenId.value = '';
        createBtn.disabled = false;
        deleteTaskBtn.disabled = true;
    }
}