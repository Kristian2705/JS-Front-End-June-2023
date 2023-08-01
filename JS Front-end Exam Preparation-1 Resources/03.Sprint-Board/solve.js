// TODO:
function attachEvents() {
    const loadBtn = document.getElementById('load-board-btn');
    loadBtn.addEventListener('click', loadTasks);

    const addBtn = document.getElementById('create-task-btn');
    addBtn.addEventListener('click', addATask);

    let tasks;

    const statusToNextStatusMap = {
        'ToDo': 'In Progress',
        'In Progress': 'Code Review',
        'Code Review': 'Done',
        'Done': 'Close'
    }

    async function loadTasks(){
        try{
            const res = await fetch('http://localhost:3030/jsonstore/tasks/');
            tasks = await res.json();
            Array.from(document.getElementsByClassName('task-list')).forEach(s => s.innerHTML = '');
            console.log(tasks);
            Object.values(tasks).forEach(task => {
                const li = document.createElement('li');
                li.classList = 'task';
                const h3 = document.createElement('h3');
                h3.textContent = task.title;
                const p = document.createElement('p');
                p.textContent = task.description;
                const btn = document.createElement('button');
                btn.addEventListener('click', e => moveToNext(e));
                btn.id = task._id;

                li.appendChild(h3);
                li.appendChild(p);

                switch(task.status){
                    case 'ToDo':
                        btn.textContent = `Move to In Progress`;
                        li.appendChild(btn);
                        document.querySelector('#todo-section .task-list').appendChild(li);
                        break;
                    case 'In Progress':
                        btn.textContent = `Move to Code Review`;
                        li.appendChild(btn);
                        document.querySelector('#in-progress-section .task-list').appendChild(li);
                        break;
                    case 'Code Review':
                        btn.textContent = `Move to Done`;
                        li.appendChild(btn);
                        document.querySelector('#code-review-section .task-list').appendChild(li);
                        break;
                    case 'Done':
                        btn.textContent = `Close`;
                        li.appendChild(btn);
                        document.querySelector('#done-section .task-list').appendChild(li);
                        break;
                }
            })
        }
        catch{
            console.log('error');
        }
    }

    async function addATask(){
        const title = document.getElementById('title');
        const description = document.getElementById('description');

        const titleV = title.value;
        const descriptionV = description.value;

        if(titleV && descriptionV){
            
            fetch('http://localhost:3030/jsonstore/tasks/', {
                method: "POST",
                body: JSON.stringify({
                    title: titleV,
                    description: descriptionV,
                    status: 'ToDo'
                })
            })
            .then(res => res.json())
            .then(loadTasks)
            .catch(console.log);

            title.value = '';
            description.value = '';
        }
    }

    async function moveToNext(e){
        const currId = e.currentTarget.id;
        const task = tasks[currId];
        let method = 'PATCH';
        let body = JSON.stringify({
            ...task,
            status: statusToNextStatusMap[task.status]
        });
        if(task.status === 'Done'){
            method = 'DELETE';
            body = undefined;
        }
        fetch(`http://localhost:3030/jsonstore/tasks/${currId}`,{
            method,
            body 
        }).then(res => res.json())
        .then(loadTasks)
        .catch(console.log)
    }
}

attachEvents();