const tasksUrl = `http://localhost:3030/jsonstore/tasks`;

const courseTypes = [
    'Long',
    'Medium',
    'Short',
];

const courseListElement = document.getElementById('list');

const loadButtonElement = document.getElementById('load-course');
const addSubmitButtonElement = document.getElementById('add-course');
const editSubmitButtonElement = document.getElementById('edit-course');
const courseTitleElement = document.getElementById("course-name");
const courseTypeElement = document.getElementById("course-type");
const courseDescriptionElement = document.getElementById("description");
const courseTeacherElement = document.getElementById("teacher-name");

loadButtonElement.addEventListener('click', loadCourses);
addSubmitButtonElement.addEventListener('click', addCourse);
editSubmitButtonElement.addEventListener('click', editCourse);

let currentCourseId = '';

async function editCourse(e) {
    e.preventDefault();
    
    const title = courseTitleElement.value;
    const type = courseTypeElement.value;
    const description = courseDescriptionElement.value;
    const teacher = courseTeacherElement.value;

    if (!courseTypes.includes(type)) {
        return;
    }
    
    const course = {
        title,
        type,
        description,
        teacher,
    };

    await fetch(`${tasksUrl}/${currentCourseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
    });

    clearForm();
    
    addSubmitButtonElement.disabled = false;
    editSubmitButtonElement.disabled = true;

    await loadCourses();
} 

async function addCourse(e) {
    e.preventDefault();

    const title = courseTitleElement.value;
    const type = courseTypeElement.value;
    const description = courseDescriptionElement.value;
    const teacher = courseTeacherElement.value;

    if (!courseTypes.includes(type)) {
        return;
    }

    const course = {
        title,
        type,
        description,
        teacher,
    };

    await fetch(tasksUrl, {
        method: 'POST',
        body: JSON.stringify(course),
    });

    clearForm();

    await loadCourses();
}

async function loadCourses() {
    const response = await fetch(tasksUrl);
    const data = await response.json();

    courseListElement.innerHTML = '';

    const courses = Object.keys(data).map(key => ({_id: key, ...data[key]})); // optional

    for (const course of courses) {
        const courseElement = renderCourse(course);
        courseElement.setAttribute('data-course-id', course._id);
        
        courseListElement.appendChild(courseElement);
    }
}

function renderCourse(course) {
    const headingElement = document.createElement('h2');
    headingElement.textContent = course.title;

    const teacherElement = document.createElement('h3');
    teacherElement.textContent = course.teacher;

    const typeElement = document.createElement('h3');
    typeElement.textContent = course.type;

    const descriptionElement = document.createElement('h4');
    descriptionElement.textContent = course.description;

    const editButtonElement = document.createElement('button');
    editButtonElement.className = 'edit-btn';
    editButtonElement.textContent = 'Edit Course';

    const finishButtonElement = document.createElement('button');
    finishButtonElement.className = 'finish-btn';
    finishButtonElement.textContent = 'Finish Course';

    const courseContainer = document.createElement('div');
    courseContainer.className = 'container';
    courseContainer.appendChild(headingElement);
    courseContainer.appendChild(teacherElement);
    courseContainer.appendChild(typeElement);
    courseContainer.appendChild(descriptionElement);
    courseContainer.appendChild(editButtonElement);
    courseContainer.appendChild(finishButtonElement);

    editButtonElement.addEventListener('click', (e) => {
        courseTitleElement.value = course.title;
        courseTypeElement.value = course.type;
        courseDescriptionElement.value = course.description;
        courseTeacherElement.value = course.teacher;

        currentCourseId = courseContainer.getAttribute('data-course-id');
        courseContainer.remove();

        addSubmitButtonElement.disabled = true;
        editSubmitButtonElement.disabled = false;
    });

    finishButtonElement.addEventListener('click', async (e) => {
        await fetch(`${tasksUrl}/${course._id}`, {
            method: 'DELETE',
        });

        await loadCourses();
    });

    return courseContainer;
}

function clearForm() {
    courseTitleElement.value = '';
    courseTypeElement.value = '';
    courseDescriptionElement.value = '';
    courseTeacherElement.value = '';
}
// const API_URL = 'http://localhost:3030/jsonstore/tasks';
// let courses;
// const selectors = {
//     loadBtn: document.getElementById('load-course'),
//     addCourseBtn: document.getElementById('add-course'),
//     editCourseBtn: document.getElementById('edit-course')
// }
// const inputs = {
//     title: document.getElementById('course-name'),
//     type: document.getElementById('course-type'),
//     description: document.getElementById('description'),
//     teacher: document.getElementById('teacher-name')
// }
// const courseTypes = [
//     'Long',
//     'Medium',
//     'Short',
// ];
// selectors.loadBtn.addEventListener('click', loadCourses);
// selectors.addCourseBtn.addEventListener('click', addCourse);

// async function loadCourses(){
//     const res = await fetch(API_URL);
//     courses = await res.json();
//     document.getElementById('list').innerHTML = '';
//     Object.keys(courses).map(key => ({_id: key, ...courses[key]})).forEach(course => {
//         const bigDiv = createElement('div', null, ['container'], null, document.getElementById('list'));
//         createElement('h2', course.title, [], null, bigDiv);
//         createElement('h3', course.teacher, [], null, bigDiv);
//         createElement('h3', course.type, [], null, bigDiv);
//         createElement('h4', course.description, [], null, bigDiv);
//         const editBtn = createElement('button', 'Edit Course', ['edit-btn'], course._id, bigDiv);
//         editBtn.addEventListener('click', editCourseInForm);
//         const finishBtn = createElement('button', 'Finish Course', ['finish-btn'], course._id, bigDiv);
//         finishBtn.addEventListener('click', finishCourse);
//     });
// }

// function addCourse(){
//     if(!courseTypes.includes(inputs.type.value)){
//         return;
//     }
//     const currCourse = {
//         title: inputs.title.value,
//         type: inputs.type.value,
//         description: inputs.description.value,
//         teacher: inputs.teacher.value
//     }
//     fetch(API_URL, {
//         method: "POST",
//         body: JSON.stringify(currCourse)
//     }).then(loadCourses);

//     Object.values(inputs).forEach(inp => inp.value = '');
// }

// function editCourseInForm(e){
//     const currId = e.currentTarget.id;
//     const currCourse = courses[currId];
//     inputs.title.value = currCourse.title;
//     inputs.type.value = currCourse.type;
//     inputs.description.value = currCourse.description;
//     inputs.teacher.value = currCourse.teacher;
//     e.currentTarget.parentElement.remove();
    
//     selectors.addCourseBtn.disabled = true;
//     selectors.editCourseBtn.disabled = false;

//     selectors.editCourseBtn.addEventListener('click', editCourse);

//     function editCourse(){
//         if(!courseTypes.includes(inputs.type.value)){
//             return;
//         }
//         const editedCourse = {
//             title: inputs.title.value,
//             type: inputs.type.value,
//             description: inputs.description.value,
//             teacher: inputs.teacher.value
//         }
//         fetch(`${API_URL}/${currId}`,{
//             method: 'PUT',
//             body: JSON.stringify(editedCourse)
//         }).then(loadCourses);

//         selectors.addCourseBtn.disabled = false;
//         selectors.editCourseBtn.disabled = true;

//         Object.values(inputs).forEach(inp => inp.value = '');
//     }
// }

// function finishCourse(e){
//     const currId = e.currentTarget.id;
//     fetch(`${API_URL}/${currId}`, {
//         method: "DELETE",
//     }).then(loadCourses);
// }

// function createElement(type, textContent, classes, id, parent){
//     const el = document.createElement(type);

//     if(textContent){
//         el.textContent = textContent;
//     }

//     if(classes && classes.length > 0){
//         el.classList.add(...classes);
//     }

//     if(id){
//         el.id = id;
//     }

//     if(parent){
//         parent.appendChild(el);
//     }

//     return el;
// }