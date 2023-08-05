const API_URL = 'http://localhost:3030/jsonstore/tasks';

const loadBtn = document.getElementById('load-vacations');
const addBtn = document.getElementById('add-vacation');
const editBtn = document.getElementById('edit-vacation');
const list = document.getElementById('list');

let vacationsAsArr;
let nameInp = document.getElementById('name');
let daysInp = document.getElementById('num-days');
let dateInp = document.getElementById('from-date');

loadBtn.addEventListener('click', loadData);
addBtn.addEventListener('click', addVacation);
editBtn.addEventListener('click', editVacation);

async function loadData(){
    const res = await fetch(API_URL);
    const vacations = await res.json();

    list.innerHTML = '';

    vacationsAsArr = Object.keys(vacations).map(key => ({_id: key, ...vacations[key]}));
    
    for (const vacation of vacationsAsArr) {
        const currRender = renderHTML(vacation);
        list.appendChild(currRender);
    }
}

async function editVacation(e){
    e.preventDefault();

    const currId = e.currentTarget.getAttribute('dataId');

    const vacation = {
        name: nameInp.value,
        days: daysInp.value,
        date: dateInp.value
    }

    await fetch(`${API_URL}/${currId}`, {
        method: "PUT",
        body: JSON.stringify(vacation)
    })

    clearInputs();

    editBtn.disabled = true;
    addBtn.disabled = false;

    await loadData();
}

async function deleteVacation(e){
    e.preventDefault();

    const currId = e.currentTarget.getAttribute('dataId');

    await fetch(`${API_URL}/${currId}`, {
        method: "DELETE"
    })

    await loadData();
}

async function addVacation(e){
    e.preventDefault();

    const vacation = {
        name: nameInp.value,
        days: daysInp.value,
        date: dateInp.value
    }

    await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(vacation)
    })

    clearInputs();

    await loadData();
}

function renderHTML(vacation){
    const cont = document.createElement('div');
    cont.className = 'container';

    const h2 = document.createElement('h2');
    h2.textContent = vacation.name;

    const h3 = document.createElement('h3');
    h3.textContent = vacation.date;

    const h3Days = document.createElement('h3');
    h3Days.textContent = vacation.days;

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Change';
    changeBtn.className = 'change-btn';

    changeBtn.addEventListener('click', transferDataForEditing);

    const doneBtn = document.createElement('button');
    doneBtn.textContent = 'Done';
    doneBtn.className = 'done-btn';
    doneBtn.setAttribute('dataId', vacation._id);

    doneBtn.addEventListener('click', deleteVacation);

    function transferDataForEditing(){
        nameInp.value = vacation.name;
        daysInp.value = vacation.days;
        dateInp.value = vacation.date;

        editBtn.setAttribute('dataId', vacation._id);
        cont.remove();

        addBtn.disabled = true;
        editBtn.disabled = false;
    }

    cont.appendChild(h2);
    cont.appendChild(h3);
    cont.appendChild(h3Days);
    cont.appendChild(changeBtn);
    cont.appendChild(doneBtn);

    return cont;
}

function clearInputs(){
    nameInp.value = '';
    daysInp.value = '';
    dateInp.value = '';
}