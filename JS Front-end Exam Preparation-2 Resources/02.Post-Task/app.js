window.addEventListener("load", solve);

function solve() {
    const posts = {};
    const inputs = {
        title: document.getElementById('task-title'),
        category: document.getElementById('task-category'),
        content: document.getElementById('task-content')
    }

    const selectors = {
        createBtn: document.getElementById('publish-btn'),
    }

    selectors.createBtn.addEventListener('click', createPost);

    function createPost(){
        if(Object.values(inputs).some(inp => inp.value === '')){
            return;
        }

        const post = {
            title: inputs.title.value,
            category: inputs.category.value,
            content: inputs.content.value
        }

        let currId = `${post.title}.`;

        posts[currId] = post;

        console.log(post);

        const li = createElement('li', null, ['rpost'], document.getElementById('review-list'));
        const article = createElement('article', null, [], li);
        const h4 = createElement('h4', post.title, [], article);
        const p = createElement('p', `Category: ${post.category}`, [], article);
        const p2 = createElement('p', `Content: ${post.content}`, [], article);
        const editBtn = createElement('button', 'Edit', ['action-btn', 'edit'], li);
        const postBtn = createElement('button', 'Post', ['action-btn', 'post'], li);
        editBtn.id = currId;
        editBtn.addEventListener('click', editInfo);
        postBtn.id = currId;
        postBtn.addEventListener('click', postToNextLocation);
        Object.values(inputs).forEach(inp => inp.value = '');
    }

    function createElement(type, textContent, classes, parent){
        const el = document.createElement(type);

        if(textContent){
            el.textContent = textContent;
        }

        if(classes && classes.length > 0){
            el.classList.add(...classes);
        }

        if(parent){
            parent.appendChild(el);
        }

        return el;
    }

    function editInfo(e){
        const currPost = posts[e.currentTarget.id];
        inputs.title.value = currPost.title;
        inputs.category.value = currPost.category;
        inputs.content.value = currPost.content;
        e.currentTarget.parentElement.remove();
        delete currPost;
    }

    function postToNextLocation(e){
        const newLi = createElement('li', null, ['rpost'], document.getElementById('published-list'));
        newLi.innerHTML = e.currentTarget.parentElement.innerHTML;
        newLi.children[1].remove();
        newLi.children[1].remove();
        e.currentTarget.parentElement.remove();
    }
}